const {Article} = require('../../models/article');
module.exports = async(req, res) => {
	await Article.findOneAndDelete({_id:req.query.id});
	res.redirect('/admin/article');
}