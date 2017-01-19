var express = require('express');
var router = express.Router();


const Users = require('../model/model')

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});

//-------- post job --------------------
router.post('newjobGeorge', ( req, res ) => {
	
	var cleanTitle = req.body.title.replace(/ /g, '');

	var cleanUrl = req.body.url.toLowerCase();
	cleanUrl = cleanUrl.replace(/ /g, '');

 //Not Making the summary go to lower case or removing spaces
 var rawSummary = req.body.summary;

  var cleanLocation = req.body.location.replace(/ /g, '');

    Users.create({
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
