module.exports = {
    multipleMongooseToObject : function(data) {
        return data.map(data => data.toObject());

    },
    dataToObject : function (data) {
        return data ? data[0] : data;
    }
    
}