var express = require('express');
var router = express.Router();
var accountSid = 'AC984baff1892883afd37d44aa29728b3c';
var authToken = "9c9b5026871e002831c7ca108988db39";
var client = require('twilio')(accountSid, authToken);


router.post('/', function(req, res, next) {
  const msg = req.body.msg;
  var db = req.db;
  var message = {};
  var collection = db.get('messages');
  var messages = collection.find({},{}, function(e, docs) {
    return docs;
  });
  client.messages.create({
    body: msg,
    to: "+14108675309",
    from: "+15005550006"
  }, function(err, sms) {
    if(err) {console.log(err)}
    process.stdout.write(sms.sid);
    console.log("The message was created!");
  });
  res.render('success', {
    "sms"  : message.body,
    "messages" : message,
    "message" : 12
  });
});

router.get('/', function(req, res, next) {
  res.render('success', {
    "message"  : "Hey friend, you've found the endpoint of our api",
  });
});

module.exports = router;
