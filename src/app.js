var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var routers = require('./routers/index')
var bodyParser = require("body-parser");
var app = express()
var port = process.env.PORT || 3000;
var numeral = require('numeral');
var sortMiddleWare = require('./app/middlewares/SortMiddlleWare');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(sortMiddleWare);

app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers:{
        sortable : (field,sort)=>{
            const types={
                default :'Mặc định',
                asc : 'tăng dần',
                desc :'giảm dần'
            }
            const columns = {
                '':'Mặc định',
                GiaBan :'Giá',
                TenSP : 'Tên'
            }
            const type = types[sort.type]
            const column = columns[sort.column]
            return `<span class="current-sort-home">${column} ${type}</span>`
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routers(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})