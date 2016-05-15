/**
 * Created by apple on 16-5-10.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
    //res.renderFile('/login.html');
});


module.exports = router;