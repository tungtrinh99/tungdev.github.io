const Shoe = require('../models/shoes')
const { mongooseToObject } = require('../../util/mongoose')

class AdminController {
    create(req,res,next){
        res.send('them')
    }
    home(req,res,next){
        res.render('admin/admin')
    }
}

module.exports = new AdminController;