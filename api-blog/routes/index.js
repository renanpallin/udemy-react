var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    title: 'Express',
    course: 'Link do curso',
    author: 'Renan Pallin <renanpallin@gmail.com>',
    message: 'Você está diante de um recurso do curso'
  });
});

module.exports = router;
