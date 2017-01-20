var express = require('express');
var router = express.Router();


const User = require('../model/model')

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});

//-------- post job --------------------
router.post('/newjob', function( req, res ) {

	
	var cleanTitle = req.body.title.replace(/ /g, '');

	var cleanUrl = req.body.url.toLowerCase();
	cleanUrl = cleanUrl.replace(/ /g, '');

 //Not Making the summary go to lower case or removing spaces
 var rawSummary = req.body.summary;

  var cleanLocation = req.body.location.replace(/ /g, '');

//we might be able to grab the user from the params instead of passing it down through props, if we have it in the url and it's unique
// User.findOneAndUpdate({'username': req.params.id},{$push: .......same as below

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
					// res.send(doc); ***THIS WE WILL NEED TO SEND BACK AND UPDATE THE PAGE NEW:TRUE SHOULD SEND BACK THE UPDATED ENTRY
          res.send("NEW JOB POST MADE TO USER ANDY")
				}
			});

 
    })

module.exports = router;
