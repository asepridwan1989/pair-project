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
// db.Trip.findAll({
//   include: [
//     {
//       model: db.Category
//     }
//   ]
// })
// .then(hasil => console.log(hasil))
// .catch(console.error)

db.Trip.findAll(
   {
     where:{id: 1},
     include:[
       {
         model: db.User
       }
     ]}
   )
 .then(detail_trip =>{
  console.log(JSON.stringify(detail_trip, null, 2));
 })
 .catch()

//  const password = require('./helpers/password')
// let db = require('./models')
// password.salt('hacktiv8',(salt) => {
//   db.User.create({
//       name: "artezy",
//       email: 'rtz@gmail.com',
//       phone: "09803274032",
//       pass: salt,
//       privilage: "user"
//       })
// })