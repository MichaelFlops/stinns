var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/robots', function(req, res) {
  res.render('robots.txt');
});

module.exports = router;
