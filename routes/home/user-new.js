module.exports = async (req, res, next) =>{
	//获取到地址栏里的message
	const {message} = req.query;
	res.render('home/user-new',{
		message:message
	});
}