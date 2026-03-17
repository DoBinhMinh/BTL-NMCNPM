//dùng require thay cho import để nhúng thư viện express
const express = require('express')
//nhúng thư viện path có sẵn trong nodejs
const path = require('path')

require('dotenv').config();

const databaseConfig = require("./config/database.config");
const clientRoutes = require("./routes/client/index.route")
//khởi tạo dự án app express()
const app = express()
//tên cổng
const port = 3000
//Kết nối csdl
databaseConfig.connect();
//Thiết lập cho dự án biết thư mục chứa code cho phần giao diện views
app.set('views', path.join(__dirname,"views"))
//Thiết lập view engine
app.set('view engine', 'pug')
//Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname,"public")))

app.use("/",clientRoutes)

app.listen(port, () => {
  console.log(`Website đang chạy trên cổng ${port}`)
})

