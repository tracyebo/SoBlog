const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
	aid:{
		//要评论的文章ID
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'Article'
	},
	uid:{
		//要评论的用户ID
		type : mongoose.Schema.Types.ObjectId,
		ref  : 'User'
	},
	time:{
		type : Date
	},
	content:{
		type : String
	}
});
const Comment = mongoose.model('Comment',commentSchema);
module.exports = {
	Comment
};