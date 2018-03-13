var express = require('express');
var router = express.Router();
const db = require('../database');

/* GET heroes listing. */
router.get('/', function(req, res) {
  db.get('heroes').find({}, { sort: {'attributes.name': 1 } })
  .then((heroes) => res.send(heroes));
});

module.exports = router;
