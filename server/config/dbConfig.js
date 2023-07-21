const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://nikhilg:Nikhil12345@cluster0.h8xldlc.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;