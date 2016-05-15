var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
  //res.render('testUser', {title : 'Test case'});
});

module.exports = router;
