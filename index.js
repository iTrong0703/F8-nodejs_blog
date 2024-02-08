const express = require('express')//yêu cầu thư viện express vừa cài để add vào chương trình
const morgan = require('morgan')
const app = express()//sử dụng toán tử call () để gọi express
const port = 3000


app.use(morgan('combined'))

//get ở đây chính là tạo ra router con đường dẫn tới web
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})