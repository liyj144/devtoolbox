var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jade/index', { title: 'Express' });
});
router.get('/time', function(req, res, next) {
  res.render('jade/time', { title: '时间处理' });
});
router.get('/welcome', function(req, res, next) {
  res.sendfile('app/index.html');
});

module.exports = router;
