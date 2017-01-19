const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const User= new mongoose.Schema({

 username: {
    type:String,
    // unique: true, if we can login from different socail accounts this can't be unique
    required:true
  },
 email: {
    type:String,
    unique: true,
    required:true
  },
 
 Jobs:[{
        job_id: { type: mongoose.Schema.Types.ObjectId },
        title: {
            type:String,
            // unique: true, NO because jobs COULD be named the same
            required:true
        },
        url: String,
        summary: String,
        location: String,
        isHot: Boolean,
        status: String,
        Notes:[
            {
            category: {
                type: String,
                required: true // must have a category
            },
            note_id: { type: mongoose.Schema.Types.ObjectId },
            noteText: String
            }
        ]        
    }]

});

User.plugin(uniqueValidator);

module.exports = mongoose.model('User', User);