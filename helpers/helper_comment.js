const db = require('../models');

function getCommentByIdTrip(idTrip,cb){
  db.Comment.findAll({
      where: {id: idTrip}
  })
  .then(function(listComment){
    cb(listComment)
  })
  .catch(console.error)
}


module.exports = {
        getCommentByIdTrip
                };
