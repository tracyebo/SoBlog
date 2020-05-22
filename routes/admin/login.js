var {User} = require('../../models/user');
// 导入bcrypt
const bcrypt = require('bcrypt');
module.exports =async(req,res,next)=>{
	//async 异步
	var {email , password}=req.body;
	if(email.trim().length == 0 || password.trim().length == 0){
		//status() 设置状态码render('admin/error',{msg:'账号 或 密码 错误！'});
        return res.status(400).render('admin/error',{msg:'账号 或 密码 错误！'});
        //return -> stop
    }
    let user = await User.findOne({email});
    if(user){
    	// bcrypt and the cpmpare
    	let isV = await bcrypt.compare(password,user.password)
    	if(isV){
    		//向session存储用户信息
    		req.session.username = user.username;
            //将用户角色存储在session中，以便在登录拦截loginGuard中判断用户角色
            req.session.role = user.role;
    		req.app.locals.userInfo = user;
            //判断用户的角色
            if(user.role == 'admin'){
                res.redirect('/admin/user');
            }else{
                res.redirect('/home/');
            }
    	}else{
    		// find wrong
    		res.status(400).render('admin/error',{msg:'密码 错误！'});
    	}
    }else{
    	//didnot find
    	res.status(400).render('admin/error',{msg:'账号 或 密码 错误！'});
    }
};
