const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://nikhilmrh1234:PIrh6iio957gXvK5@cluster0.em8lyaz.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;