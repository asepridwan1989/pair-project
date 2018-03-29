const db = require('../models');

function getCommentByIdTrip(idTrip,cb){
  db.Comment.findAll({
      where: {TripId: idTrip}
  })
  .then(function(listComment){
    cb(listComment)
  })
  .catch(console.error)
}


module.exports = {
        getCommentByIdTrip
                };
