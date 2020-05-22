const {Comment}= require('../../models/comment');

module.exports = async (req,res,next)=>{
	const {content,uid,aid}=req.body;
	await Comment.create({
		content:content,
		uid:uid,
		aid:aid,
		time:new Date()
	});
	res.redirect('/home/article?id='+aid);
};