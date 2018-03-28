const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');

// ====== Routes Connection ======
const indexRoutes = require('./routes')
app.use('/', indexRoutes)

app.listen(3000, ()=>{
  console.log('Connected');
})
