const db = require('../models');

function getAllTrip(cb){
  db.Trip.findAll()
  .then(function(listTrip){
    cb(listTrip)
  })
  .catch(console.error)
}

function getDetailTrip(idTrip, cb){
  db.Trip.findOne(
     {
       where:{id: idTrip},
       include:[
         {
           model: db.User
         }
       ]}
     )
   .then(x =>{
     cb(x)
   })
   .catch()


}

module.exports = {
                  getAllTrip,
                  getDetailTrip
                };
