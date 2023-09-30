// /* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
// var express = require("express");
// var app = express();

// /* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
// var server = app.listen(3030, function(){
//     console.log("Node.js is listening to PORT:" + server.address().port);
// });

// /* 3. 以後、アプリケーション固有の処理 */

// // サンプルデータ jsonデータを書く
// // ここを変更するだけで大丈夫だよ！！
// var apiSample = 
// {
//     "name": "Event Ticket NFT 3",
//     "description": "This is sample 3",
//     "image":"https://i.imgur.com/FrkBVaD.png"
// }


// // 取得するAPI
// // http://localhost:3000/api
// app.get("/", function(req, res, next){
//     // res.json(apiSample);
//     res.send(apiSample);
// });

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => {
  try {
    res.send({ name: "hoge" });
  } catch (error) {
    res.sendStatus(500);
  }
});

//app.listen(process.env.PORT || 3000);
app.listen({ port: 3000 }, () => {
  console.log(`Server ready at http://localhost:3000`);
});
console.log('starts');

export default app;