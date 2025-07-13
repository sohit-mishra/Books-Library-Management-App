const mongoose = require('mongoose');

const MyBookSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    status:{
        type:String,
        enum: ["Want to Read", "Currently Reading", "Read"], 
        default: "Want to Read",
    },
    rating:{
        type:Number,
        min : 1,
        max: 5,
        required: true
    },
});

const MyBooks = mongoose.model('MyBooks', MyBookSchema);

module.exports = MyBooks;