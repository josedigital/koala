var express = require('express');
var router = express.Router();


const User = require('../model/model')

// ----------------- USERS --------------------------------

// save user
router.post('/saveUser', function( req, res ) {}),

//delete user
router.post('/deleteUser', function( req, res ) {}),


// ----------------- JOBS --------------------------------

// save job 
router.post('/savejob', function( req, res ) {

	
	var cleanTitle = req.body.title.replace(/ /g, '');

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

//get Jobs
router.post('/getJobs', function( req, res ) {}),

// edit Job
router.post('/editJob', function( req, res ) {}),

//delete Job
router.post('/deleteJob', function( req, res ) {}),


// ----------------- NOTES --------------------------------

// save Note
router.post('/saveNote', function( req, res ) {}),

//get Notes
router.post('/getNotes', function( req, res ) {}),

// edit Note
router.post('/editNote', function( req, res ) {}),

//delete Note
router.post('/deleteNote', function( req, res ) {}),

// ----------------- TESTING --------------------------------

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});


module.exports = router;
