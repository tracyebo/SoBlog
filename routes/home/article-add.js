const formidable = require('formidable');
const path       = require('path');
const {Article}         = require('../../models/article');
module.exports = (req, res, next) =>{
	const form = new formidable.IncomingForm();
	//配置上传文件的位置　
	form.uploadDir = path.join(__dirname,'../','../','public','uploads');
	//保留上传文件的后缀 
	form.keepExtensions = true;
	form.parse(req,async(err,fields,files)=>{
			if(!fields.title || !fields.content){
				res.redirect('/home/article-edit?message='+'请填写文章标题和文章具体内容!');
			}
			//	fieldskey:保存普通表单数据 ; files:保存上传的文件数据
			// 	res.send(fields);
			//	需要对路径files进行处理
			// 	res.send(files.cover.path.split('public')[1]);
			await Article.create({
				title:fields.title,
				author:fields.author,
				publishDate:fields.publishDate,
				cover:files.cover.path.split('public')[1],
				content:fields.content
			});
			res.redirect('/home/');
	})
}