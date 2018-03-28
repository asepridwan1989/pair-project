const db = require('./models');

// db.Trip.findAll({raw:true})
//   .then((data) => {
//     console.log(data);
//   })

// db.Category.findAll({
//   include: [{
//     model: db.Category,
//     as: 'Category'
//   }]
// })
// .then(albums => console.log(albums))
// .catch(console.error)

//join trip and category
db.Trip.findAll({
  include: [
    {
      model: db.Category
    }
  ]
})
.then(hasil => console.log(hasil))
.catch(console.error)
