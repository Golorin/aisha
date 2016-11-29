var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('bioData');
  collection.find({}, {}, function(e, docs) {
    var data = JSON.stringify(docs.schools);
    res.render('index', {
      'bioData'  : docs,
      'schools' : data
    });
  })
});

module.exports = router;
