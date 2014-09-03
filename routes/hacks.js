var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hacks', function(req, res) {
  res.render('hacks.html');
});

module.exports = router;
