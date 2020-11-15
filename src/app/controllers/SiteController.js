const myModel = require('../models/shoes')
const numeral = require('numeral')
const {multipleMongooseToObject} = require('../../util/mongoose')
const { json } = require('body-parser');
const mySqlConnect = require('../models/db');

class SiteController {
    index(req,res,next) {
        var query = 'SELECT * FROM sanpham';
        var column = res.locals._sort.column;
        var type = res.locals._sort.type;
        if(req.query.hasOwnProperty('_sort')){
           query = `${query} ORDER BY ${column} ${type}`;
        }
        mySqlConnect.query(query,(err,result,fields)=>{
            if(!err) res.render('home',{docs : result},)
            else console.log(err);
        })
    }


}
module.exports = new SiteController