//引入 mongoose 模块，并定义 schema 模型对象
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const Joi = require('joi');
// 导入bcrypt
const bcrypt = require('bcrypt');
var userSchema = new Schema({
	username : {
		type : String,
		required : true,//must
		minlength : 2,
		maxlength : 20
	},
	email    : {
		type : String,
		required : true,
		unique : true//不重复
	},
	password :  {
		type : String,
		required : true
	},
	//角色 admin superroot normal users
	role :  {
		type : String,
		required : true
	},
	//状态 0 ok 1 no
	state : {
		type : Number,
		default : 0
	}
});

const User = mongoose.model('User',userSchema);
// async function createUser(){
// 	const salt = await bcrypt.genSalt(11);
// 	const password = await bcrypt.hash('0516soso', salt);
// 	const user = await User.create({
// 		username:'soso',
// 		email:'731354083@qq.com',
// 		password:password,
// 		role:'admin',
// 		state:0	
// 	}).then(() => {
// 		console.log('creating SUC!')
// 	}).catch((err) => {
// 		console.log(err);
// 		console.log('creating FAl!')
// 	});

// };
// createUser();

//	验证用户信息
const validateUser = user => {
	//定义验证规则
	const schema = {
		username: Joi.string().min(2).max(10).required().error(new Error('用户名不符合规则')),
		email: Joi.string().email().error(new Error('邮箱不符合规则')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{6,20}$/).required().error(new Error('密码不符合规则')),
		role:Joi.string().valid('normal','admin').required().error(new Error('角色不符合规则')),
		state:Joi.number().valid(0,1).required().error(new Error('状态不符合规则'))
	};
	return Joi.validate(user, schema);
}

module.exports = {
	User,
	validateUser
}