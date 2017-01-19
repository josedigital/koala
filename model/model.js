const mongoose = require('mongoose');

const User= new mongoose.Schema({

 username: String,
 email: String,
 
 Jobs:[
    {
        _id: Number,
        title: String,
        url: String,
        summary: String,
        location: String,
        isHot: Boolean,
        status: String,
        Notes:[
            {
            category: String,
            _id: Number,
            noteText:String
            }
        ]        
   }
  ]

});

//is users messing this up?
module.exports = mongoose.model('User', User);