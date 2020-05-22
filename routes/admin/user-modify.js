const { User } = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) =>{
	const { username, email, role, state, password } = req.body;
	const id = req.query.id;
	let user = await User.findOne({_id:id});
	const V = await bcrypt.compare(password,user.password);
	if(V){
		//SUC
		// 将用户信息更新到数据库中
		await User.updateOne({_id: id}, {
			username: username,
			email: email,
			role: role,
			state: state
		});
		// 重定向到用户列表页面 
		res.redirect('/admin/user');
	}else{
		//FAL
		let obj = {path: '/admin/user-edit', message: '密码错误！无法修改该用户信息！', id: id}
		next(JSON.stringify(obj));
	}


}