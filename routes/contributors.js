var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contributors', function(req, res) {
  res.render('contributors.html');
});

module.exports = router;
