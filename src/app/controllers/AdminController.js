const Shoe = require('../models/shoes')
const { mongooseToObject } = require('../../util/mongoose')

class AdminController {
    create(req,res,next){
        res.send('tung dep trai')
    }
}

module.exports = new AdminController;