const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');

// ====== Routes Connection ======
const indexRoutes = require('./routes')
const tripRoutes = require('./routes/trips.js')

app.use('/', indexRoutes);
app.use('/trips', tripRoutes)



app.listen(3000, ()=>{
  console.log('Connected');
})
