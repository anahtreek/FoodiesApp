var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var schema = new mongoose.Schema({
	id: Number,
	img : String,
	name : String,
	address : String,
	cuisines : String,
	rating : Number,
	comments: String
})

var Restaurant = mongoose.model('restaurant' , schema);

module.exports = Restaurant;
