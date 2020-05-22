//引入 mongoose 模块
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://soso:0516soso@localhost:27017/blogs',{ useNewUrlParser: true , useUnifiedTopology: true})
	.then(() => console.log('SQ SUC!'))
	.catch(() => console.log('SQ FAl!'))


