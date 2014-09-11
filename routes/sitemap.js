var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sitemap', function(req, res) {
  res.render('sitemap.xml');
});

module.exports = router;
