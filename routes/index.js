var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bioData');
  collection.find({}, {}, function(e, docs) {
    res.render('index', {
      'bioData'  : docs,
      'schools' : JSON.stringify(docs.schools)
    });
  })
});

module.exports = router;
