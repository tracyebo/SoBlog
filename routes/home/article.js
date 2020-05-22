// 导入文章
const { Article } = require('../../models/article');
// 导入评论
const { Comment } = require('../../models/comment');

module.exports = async(req, res, next) => {
	// 接收网页回传的文章id
	const id = req.query.id;
	// 根据id查询文章
	let article = await Article.findOne({_id: id}).populate('author');
	// 查询文章所对应的评论
	let comments = await Comment.find({aid: id}).populate('uid');
	
  	res.render('./home/article',{article, comments});
}