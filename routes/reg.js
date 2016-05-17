/**
 * Created by apple on 16-5-11.
 */

var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
    res.render('reg', { title: 'Express' });
    //res.renderFile('/login.html');
});


module.exports = router;
