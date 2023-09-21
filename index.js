const express = require('express')
const app = express()
const studentModel = require('./routes/form')
const authRoutes = require('./routes/auth')

const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


app.use(express.json())
app.use("/form/registration", studentModel);
app.use("/auth", authRoutes);



app.set("view engine", "ejs")
app.use(express.static(__dirname+'/public'))
app.use(cookieParser())



app.get("/", (req, res) => {
    res.render(__dirname+'/views/home.ejs')
})


app.get("/login",(req,res)=>{

    if(req.cookies.accessToken){

        try {
            var isTokenValid = jwt.verify(req.cookies.accessToken,"ajsdfSDKFJ%&&$4773")
            res.redirect('/form')
        } catch (error) {
        }

    }

    res.render(__dirname+"/views/login.ejs")
})


app.get("/form",(req,res)=>{

    if(req.cookies.accessToken){

        try {
            var isTokenValid = jwt.verify(req.cookies.accessToken,"ajsdfSDKFJ%&&$4773")
            console.log(isTokenValid)
        } catch (error) {
            res.redirect('/login')
        }


    }else{
        res.redirect('/login')
    }

    res.render(__dirname+"/views/index.ejs")
})
        




mongoose.connect("mongodb+srv://mtalhagujjar285:mtalha123@studentsdata.msrlmss.mongodb.net/form?retryWrites=true&w=majority").then((res) => {
    console.log("Connected...")
}).catch((error) => {
    console.log(error.message)
})

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log('Server is running...')
})