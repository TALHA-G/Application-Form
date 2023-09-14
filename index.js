const express = require('express')
const mongoose = require('mongoose')
const app = express()
const studentModel = require('./routes/form')


app.use(express.json())

app.get("/form/registration", studentModel);

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/form", (req, res) => {
    res.render('index')
})

mongoose.connect("mongodb://127.0.0.1:27017").then((res) => {
    console.log("Connected...")
}).catch((error) => {
    console.log(error.message)
})

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log('Server is running...')
})