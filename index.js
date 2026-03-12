//dùng require thay cho import để nhúng thư viện express
const express = require('express')

//nhúng thư viện path có sẵn trong nodejs
const path = require('path')

//khởi tạo dự án app express()
const app = express()

//tên cổng
const port = 3000

//Thiết lập cho dự án biết thư mục chứa code cho phần giao diện views
app.set('views', path.join(__dirname,"views"))

//Thiết lập view engine
app.set('view engine', 'pug')

//Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname,"public")))


//get để lấy ra gì đó ?  '/' là đại diện cho trang chủ. 
//Thay bằng render để chuyển pug thành html rồi render ra giao diện
//biến req là dữ liệu fe gửi lên be
//res là dữ liệu be phản hồi về cho fe
app.get('/', (req, res) => {
  res.render('client/pages/home',{
    pageTitle: "Trang chủ"
  })
})

app.get('/tours', (req, res) => {
  res.render('client/pages/tour-list',{
    pageTitle: "Danh sách tour"
  })
})

app.listen(port, () => {
  console.log(`Website đang chạy trên cổng ${port}`)
})
