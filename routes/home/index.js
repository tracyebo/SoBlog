const {Article}  = require('../../models/article');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
	// 接受网页回传的page参数
	const page = req.query.page;

	// 从数据库中查询数据 (多集合联合查询) 
	let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();
	res.render('./home/default.art',{
		result: result
	});
}