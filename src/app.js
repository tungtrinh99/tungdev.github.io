var express = require('express')
var exphbs  = require('express-handlebars')
var path = require('path')
var routers = require('./routers/index')

var app =  express()
var port = process.env.PORT || 8080
var db = require('./config/db/index')
var numeral = require('numeral')

//connect to db
db.connect();

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.get('/',function(req,res,next){
    res.send('hello')
})
routers(app) 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })