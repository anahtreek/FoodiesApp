const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	restaurantName: String,
	location:String
});
const model = mongoose.model('User', schema);
module.exports = {
	userModel: model
};
