const express = require('express')
const mongoose = require('mongoose')
const app = express()
const studentModel = require('./routes/form')


app.use(express.json())

app.use("/form/registration", studentModel);

app.set("view engine", "ejs")
app.use(express.static(__dirname+ '/public'))

app.get("/form", (req, res) => {
    res.render(__dirname +'/views/index.ejs')
})

mongoose.connect("mongodb+srv://mtalhagujjar285:mt@lh@gujj@r@talha-cluster.wp71qfl.mongodb.net/Talha?retryWrites=true&w=majority").then((res) => {
    console.log("Connected...")
}).catch((error) => {
    console.log(error.message)
})

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log('Server is running...')
})