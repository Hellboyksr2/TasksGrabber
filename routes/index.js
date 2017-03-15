var express = require('express');
var router = express.Router();
var User = require('../modals/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tasks List' });
});

module.exports = router;
