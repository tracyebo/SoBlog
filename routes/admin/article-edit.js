const {Article}=require('../../models/article');

module.exports =async(req,res,next)=>{
	//获取用户ID参数
	//获取到地址栏里的message
	const {message,id} = req.query;
	//async 异步
    //标识 文章管理界面
    req.app.locals.currentLink = 'article';
	if(id){
		//id 存在 修改用户信息
		let article = await Article.findOne({_id:id}).populate('author');
		res.render('admin/article-edit',{
			message : message,
			article : article,
			link : '/admin/article-edit?id=' + id,
			button : '查看文章信息'
		});
	}else{
		//new user
		res.render('admin/article-edit',{
			message : message,
			link : '/admin/article-add',
			button : '发布新文章'
		});
	}
};
