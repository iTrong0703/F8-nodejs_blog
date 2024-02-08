const express = require('express')//yêu cầu thư viện express vừa cài để add vào chương trình
const app = express()//sử dụng toán tử call () để gọi express
const port = 3000

var a =1;
var b =2;
var c = a + b;

//get ở đây chính là tạo ra router con đường dẫn tới web
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})