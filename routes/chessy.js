var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chessy', function(req, res) {
  res.render('chessy.html');
});

module.exports = router;
