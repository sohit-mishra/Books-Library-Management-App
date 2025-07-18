const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    coverImage:{
        type:String, 
        required:true
    },
    availability:{
        type:Boolean,
        required:true
    },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;