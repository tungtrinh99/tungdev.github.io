const mongoose = require('mongoose');
const mysql = require('mysql');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Shoe = new Schema({
    
    name: {type : String ,required : true},
    image: String,
    pricecurrent: Number,   
    priceold: Number    ,
    slug :{type : String , slug : 'name',unique : true},
  },{
    timestamps: true,
  });
  

  module.exports = mongoose.model('Shoes',Shoe);