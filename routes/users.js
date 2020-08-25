var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'User Management' });
});

module.exports = router;