const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:String,
    price:String,
    image:String,
    details:String,
});

const Product = new mongoose.model('Product', ProductSchema);

module.exports = Product;


