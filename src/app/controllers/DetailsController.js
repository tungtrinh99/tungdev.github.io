const Shoe = require('../models/shoes')
const { mongooseToObject } = require('../../util/mongoose');

class DetailsController {
    show (req,res,next){
        
        Shoe.findOne({slug:req.params.slug})
            .then((docs)=>{
                res.render('products/show',{
                    docs : mongooseToObject(docs)
                })
            })
            .catch(next)
    }
}
module.exports = new DetailsController;