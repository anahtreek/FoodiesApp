const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const schema = new mongoose.Schema({
    id: Number,
    img: String,
    name: String,
    address: String,
    cuisines: String,
    rating: Number,
    comments: String
})

const Restaurant = mongoose.model('restaurant', schema);

module.exports = Restaurant;
