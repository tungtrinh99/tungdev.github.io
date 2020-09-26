const myModel = require('../models/shoes')
const numeral = require('numeral')
const {multipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    index(req,res,next) {
        myModel.find({})
            .then(docs=> {                                   
                res.render('home',{
                    docs : multipleMongooseToObject(docs)
                })              
            })
            .catch(next)
    }

}
module.exports = new SiteController