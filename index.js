//dùng require thay cho import để nhúng thư viện express
const express = require('express')
//khởi tạo dự án app express()
const app = express()
//tên cổng
const port = 3000
//get để lấy ra gì đó ?  '/' là đại diện cho trang chủ
//biến req là dữ liệu fe gửi lên be
//res là dữ liệu be phản hồi về cho fe
app.get('/', (req, res) => {
  res.send('Trang chủ')
})

app.get('/tours', (req, res) => {
  res.send('Danh sách tour')
})

app.listen(port, () => {
  console.log(`Website đang chạy trên cổng ${port}`)
})
