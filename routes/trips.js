const router = require('express').Router();
const db = require('../models');

//======= Helper function =======
const helperTrip = require('../helpers/helper_trip.js')

router.get('/:id/detail', function(req, res){
  let idTrip= req.params.id
  db.Trip.findOne(
     {
       where:{id: idTrip},
       include:[
         {
           model: db.User
         }
       ]}
     )
   .then(detail_trip =>{
      res.render('detail', {detail : detail_trip})
   })
   .catch()
});

// ====== add Comment to Trip ======
router.post('/:id/detail', function(req, res){
  db.Comment.Create({
    TripId:req.body
  })
});

module.exports = router;
