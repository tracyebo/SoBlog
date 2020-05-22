const {Article}=require('../../models/article');
//mongoose-sex-page
const pagination = require('mongoose-sex-page');
module.exports = async(req,res,next)=>{
    //接收网页传递回来的页码 然后用page()更新网页显示的数据
    const page = req.query.page;
	//async 异步
    //标识 文章管理界面
    req.app.locals.currentLink = 'article';
    //user and article 多集合联合查询
    //page 当前页  size 每页数量 display 初始页
    //exec()向数据库发出查询请求
    let articles = await pagination(Article).find().page(page).size(10).display(3).populate('author').exec();
    // res.send(articles); //test
	res.render('admin/article',{
        articles : articles
    });
};
