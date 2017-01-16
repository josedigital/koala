var express = require('express');
var router = express.Router();

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.json({test: 'testings'});
});

module.exports = router;
