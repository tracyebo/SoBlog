//引入joi
const Joi = require('joi');

//定义验证规则
const schema = {
	username: Joi.string().min(2).max(10).required().error(new Error('用户名不符合规则')),
	email: Joi.string().email().error(new Error('邮箱不符合规则')),
	password: Joi.string().regex(/^[a-zA-Z0-9]{6,20}$/).required().error(new Error('密码不符合规则')),
	role:Joi.string().valid('nomarl','admin').required().error(new Error('角色不符合规则')),
	state:Joi.number().valid(0,1).required().error(new Error('状态不符合规则'))
};
//asynac 异步函数
async function run () {
	try {
		// 实施验证 
		await Joi.validate({username: 'ab', birth: 1800}, schema);
	}catch (ex) {
		console.log(ex.message);
		return;
	}
	console.log('验证通过')
	
}

run();