var express = require('express');
var router = express.Router();
var apiHelper = require('../helpers/apiHelper')

/* GET home page. */
router.get('/', function (req, res, next) {
  apiHelper.callApi("http://localhost:5000/api")
    .then(response => {
      console.log(response);
      res.render('index', { title: 'Pie shop', data: response.data });
    })
    .catch(error => {
      res.send(error)
    })
});

module.exports = router;
