const db = require('../models');

function getAllTrip(cb){
  db.Trip.findAll({
    include: [
      {model: db.Category}
    ]
  })
  .then(function(listTrip){
    cb(listTrip)
  })
  .catch(console.error)
}

module.exports = {
                  getAllTrip
                };
