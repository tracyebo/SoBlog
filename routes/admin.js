var express = require('express');
var admin = express.Router();
/* GET users listing. 添加路由*/
admin.get('/login',(req, res, next)=>{
	res.render('admin/login');
});
admin.post('/login',require('./admin/login'));
admin.get('/logout',require('./admin/logout'));

admin.get('/user', require('./admin/user-page'));
admin.get('/user-edit', require('./admin/user-edit'));
admin.post('/user-edit', require('./admin/user-edit-fn'));
admin.post('/user-modify',require('./admin/user-modify'));
admin.get('/delete',require('./admin/user-delete'));

admin.get('/article', require('./admin/article'));
admin.get('/article-edit', require('./admin/article-edit'));
admin.post('/article-add',require('./admin/article-add'));
admin.get('/article-delete',require('./admin/article-delete'));

module.exports = admin;

