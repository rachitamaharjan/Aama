var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

/* GET forum page. */
router.get('/forum', function (req, res, next) {
  res.render('forum');
});
router.get('/singleblog', function (req, res, next) {
  res.render('singleblog');
});
router.get('/dietchart', function (req, res, next) {
  res.render('dietchart');
});

module.exports = router;
