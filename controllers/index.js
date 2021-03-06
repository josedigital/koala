var express = require('express');
var router = express.Router();


const User = require('../model/model')

// ----------------- USERS --------------------------------

// --- save user
router.post('/saveUser', function( req, res ) {}),

//delete user
router.delete('/deleteUser', function( req, res ) {}),


// ----------------- JOBS --------------------------------

// --- save job 
router.post('/savejob', function( req, res ) {

  var cleanTitle = req.body.title
	// Taking the spaces out isn't a good idea
	// var cleanTitle = req.body.title.replace(/ /g, '');

	var cleanUrl = req.body.url.toLowerCase();
	cleanUrl = cleanUrl.replace(/ /g, '');

 //Not Making the summary go to lower case or removing spaces
 var rawSummary = req.body.summary;

  var cleanLocation = req.body.location.replace(/ /g, '');


    User.findOneAndUpdate({'username': "andy"},{$push:
      {'Jobs':{
                title: cleanTitle,
                url: cleanUrl,
                summary: rawSummary,
                location: cleanLocation}
              }},{new: true })
			.exec(function(err, doc) {
				if (err) {
					console.log(err);
				} else {
					res.send(doc); //THIS WE WILL NEED TO SEND BACK AND UPDATE THE PAGE NEW:TRUE SHOULD SEND BACK THE UPDATED ENTRY
          
          
				}
			});

 
    }),

// --- get Jobs
router.get('/getJobs', function( req, res ) {
	User.findOne(
    { 'username': "andy"}, 
    {Jobs: 1}, function(err, doc){
      if (err) {
        console.log(err);
      } else {
        //res.json(doc); //resulting json sent back to front
        res.json(doc)
      }
  });
});


// --- edit Job
router.put('/editJob', function( req, res ) {}),
//I'm not sure how this will work, edit all fields, or just one field at a time? Need more info on the process, I'm thinking it's just one field at a time

// --- delete Job
router.put('/deleteJob', function( req, res ) {
  var job_id = req.body.job_id
    User.update({ 'username': "andy"},//username will be unique, from session
    { $pull: { 'Jobs': { '_id': job_id } } }//job_id will be unique, passed in
    ).exec(function(err, doc){
      if (err) {
        console.log(err);
      } else {
        res.json(doc); //resulting json sent back to front
      }
    } )
    
});



// ----------------- NOTES --------------------------------

// --- save Note
router.post('/saveNote', function( req, res ) {
  var Jobs_id = req.body.Jobs_id;
  var Jobs_Notes_Category = req.body.Jobs_Notes_Category;
  var Jobs_Notes_NoteText = req.body.Jobs_Notes_NoteText;

    User.update({'username': 'George', 'Jobs._id': Jobs_id},{$push:
      {'Jobs.$.Notes':{
          'category': Jobs_Notes_Category,
          'noteText': Jobs_Notes_NoteText
          }}},{new:true}).exec(function(err, doc){
            if (err){
              console.log(err);
              } else {
                res.send(doc);
              }
          })
}),

// --- get Notes
//Trying to get all notes for one job, but i think we always will get back the entire object, not just the notes.
router.get('/getNotes', function( req, res ) {
var job_id = req.body.job_id
	User.find(
  { 'username': 'andy', 'Jobs.$._id': job_id }).exec(
    // { 'username': 'andy', 'Jobs._id': job_id },
  // User.findOne( 
  //     {'username': "andy",  'Jobs':  
  //         { $elemMatch: {'_id': job_id}}
  //  },
    function(err, doc){
      if (err) {
        console.log(err);
      } else {
        res.json(doc);
      }
  })
});

// --- edit Note
router.put('/editNote', function( req, res ) {}),

// --- delete Note
router.put('/deleteNote', function( req, res ) {
  var Jobs_id = req.body.Jobs_id;
  var Jobs_Notes_id = req.body.Jobs_Notes_id;

   User.update({'username': 'George', 'Jobs._id': Jobs_id},{$pull:
     {'Jobs.$.Notes':{
          '_id': Jobs_Notes_id
          }}},{new:true}).exec(function(err, doc){
            if (err){
              console.log(err);
              } else {
                res.send(doc);
              }
          })
}),

// ----------------- TESTING --------------------------------

// ---  create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});


module.exports = router;
