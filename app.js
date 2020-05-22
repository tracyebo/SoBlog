const express = require('express');
const template= require('art-template');
//body-parser 处理post请求
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();//SQ connect
require('./models/connect');
const home = require('./routes/home');
const admin = require('./routes/admin');

//时间格式化
const dateFormat= require('dateformat');
//向内部导入dateFormat
template.defaults.imports.dateFormat = dateFormat;	
//开放静态文件public
app.use(express.static(path.join(__dirname,'public')));
//处理post请求参数
app.use(bodyParser.urlencoded({extended:false}));
//配置session
app.use(session({
	secret:'secret key',
	resave: false, //添加 resave 选项
  	saveUninitialized: false,//添加 saveUninitialized 选项
  	cookie: ('name', 'value',{maxAge:24*60*60*1000*3,secure: false})
}));


app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
app.engine('art',require('express-art-template'));

// 拦截请求 判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));

//为路由匹配请求路径：admin管理界面 home展示界面
app.use('/home',home);
app.use('/admin',admin);	

// 错误处理
app.use((err,req,res,next) => {
	const result = JSON.parse(err);
	let params = [];
	for(let attr in result){
		if(attr != 'path'){
			params.push(attr + '=' + result[attr]);
		}
	}
	res.redirect(`${result.path}?${params.join('&')}`);	
});

app.listen(8080);
console.log("successfully in localhost:8080 !")