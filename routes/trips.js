const router = require('express').Router();
const db = require('../models');

//======= Helper function =======
const helperTrip = require('../helpers/helper_trip.js')
const helperComment = require('../helpers/helper_comment.js')

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
     helperComment.getCommentByIdTrip(idTrip,(list_comment)=>{
      res.render('detail', {detail : detail_trip, comment: list_comment})
     })
   })
   .catch()
});

// ====== add Comment to Trip ======
router.post('/:id/detail', function(req, res){
  db.Comment.create({
    TripId:req.body.idTrip,
    comment: req.body.comment,
    name: req.body.name
  })
  .then( () => {
    res.redirect('/')
  })
});

module.exports = router;
