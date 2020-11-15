const mySqlConnect = require('../app/models/db');
var totalProductt = mySqlConnect.query('SELECT COUNT(MaSP) as tong FROM sanpham', (err, result, fields) => {
    // console.log(result[0].tong);
    return totalProductt = result[0].tong;
   
})
console.log(totalProductt);
module.exports  = totalProductt;