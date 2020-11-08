var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var routers = require('./routers/index')
var bodyParser = require("body-parser");
var app = express()
var port = process.env.PORT || 3000
var numeral = require('numeral')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routers(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})