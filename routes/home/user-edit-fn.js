
const {User ,validateUser} = require('../../models/user');
const bcrypt = require('bcrypt');
module.exports = async(req, res, next)=>{
	try {
		// 实施验证 
		await validateUser(req.body)
	}catch (e) {
		// 验证失败 重定向
		return next(JSON.stringify({path:'/home/user-new',message:e.message}));
	}

	//根据邮箱地址查询用户是否存在
	let user = await User.findOne({email:req.body.email});
	if(user) {
		return next(JSON.stringify({path:'/home/user-new',message:'该邮箱已经被注册!'}));
	}

	//标识 用户管理界面
    req.app.locals.currentLink = 'user';
	//对密码进行加密
	const salt = await bcrypt.genSalt(11);
	const password = await bcrypt.hash(req.body.password, salt);
	req.body.password = password;
	const UUser = await User.create(req.body)
	  .then(() => {	
		console.log('Register SUC!');
	}).catch((err) => {
		console.log(err);
		console.log('Register FAl!');
	});
	res.render('./admin/login');
};