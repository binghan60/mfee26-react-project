import { useState } from 'react';
import MainButton from '../../../components/MainButton/MainButton';

function Summary(props) {
  const { totalNumber, totalPrice } = props;

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {totalNumber} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${totalPrice}</div>
        </div>
        <button className="btn">前往付款</button>
        <MainButton />
      </div>
    </>
  );
}

export default Summary;
