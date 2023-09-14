const mongoose = require('mongoose')


var formModel = mongoose.model("form", new mongoose.Schema({
    Name: String,
    Email:String,
    Address: String,
    DOB: String,
    Course: String,
}))

module.exports = formModel;