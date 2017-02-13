const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var scheme = new mongoose.Schema({
  userName:String,
  password: String
});
var user = mongoose.model('user',scheme );
module.exports = {
	userModel: user
};
