var siteRouter = require('./site')
var adminRouter =  require('./admin')
var detailsRouter = require('./details')
function router(app) {
    
    
    
    app.use('/',siteRouter)
    app.use('/products',detailsRouter)
    app.use('/admin',adminRouter)
}
module.exports = router