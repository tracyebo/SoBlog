
//暴露
module.exports = (req,res,next)=>{
	if(req.url != '/login' && !req.session.username){
		res.redirect('/admin/login');
		//拦截
	}else{
		//判断用户角色
		if(req.session.role=='normal'){
			return res.redirect('/home');
		}else if(req.session.role=='admin'){

		}
		//无误，放行
		next();
	}
};