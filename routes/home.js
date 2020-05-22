var express = require('express');
var home = express.Router();

/* GET users listing. */
home.get('/user-new',require('./home/user-new'));
home.post('/user-new',require('./home/user-edit-fn'));
home.get('/',require('./home/index'));
home.get('/logout',require('./home/logout'));
home.get('/article',require('./home/article'));
home.get('/article-edit', require('./home/article-edit'));
home.post('/article-add',require('./home/article-add'));

home.post('/comment',require('./home/comment'));

module.exports = home;

