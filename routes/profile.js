var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Xavier',
    age: '14',
    Position: 'student',
  }
  res.render('profile', context);
});

module.exports = router;
