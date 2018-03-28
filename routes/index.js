const router = require('express').Router();
const db = require('../models');

//======= Helper function =======
const helperTrip = require('../helpers/helper_trip.js')

router.get('/', function(req, res){
  helperTrip.getAllTrip( function(list_trip){
    res.render('index', {listTrip: list_trip})
  });
});

module.exports = router;
