var express = require('express');
var router = express.Router();


const User = require('../model/model')

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});

//-------- post job --------------------
router.post('/newjob', function( req, res ) {
  console.log("inside post methof of newjob")
	
	var cleanTitle = req.body.title.replace(/ /g, '');

	var cleanUrl = req.body.url.toLowerCase();
	cleanUrl = cleanUrl.replace(/ /g, '');

 //Not Making the summary go to lower case or removing spaces
 var rawSummary = req.body.summary;

  var cleanLocation = req.body.location.replace(/ /g, '');

    User.create({
      title: cleanTitle,
      url: cleanUrl,
      summary: rawSummary,
      location: cleanLocation,

    }, function( err ) {
        if ( err ) {
          console.log( err )
        }
        else {
          res.send("NEW JOB POST Made")
        }
      }
    )
    })

module.exports = router;
