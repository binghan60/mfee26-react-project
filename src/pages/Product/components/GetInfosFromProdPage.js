import React, { useState } from 'react';

function GetInfosFromProdPage() {
  const [infos, setInfos] = useState[''];
  const infosOnChange = (e) => setInfos(infos);
  

  // const getProductDetail = async () => {
  //   const response = await fetch('http://localhost:3000/Product/' + sid, {
  //     method: 'get',
  //   })
  //   const data = await response.json()
  //   console.log(data)
  //   setProductDetail(data.detail[0])
  //   setProductRelated(data.related)
  // }

//   return (
//     <div className="Mars-" onChange={infosOnChange}></div>
//   )
}

// 一樣用 v.sid 傳送到商品內容頁 (Content.js)
// e.target.value

// 參考：小汪的localStorage
// useEffect(() => {
//     getData();
//     localStorage.setItem("Room", JSON.stringify(bookingList));
// }, [bookingList]);

// 學長姐程式碼
// https://github.com/EasonLiu0913/honki_react/blob/master/src/wei/pages/Product.js