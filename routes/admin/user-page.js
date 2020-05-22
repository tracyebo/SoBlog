const {User} = require('../../models/user');

module.exports = async(req,res,next)=>{
    //标识 用户管理界面
    req.app.locals.currentLink = 'user';
    // 接收客户端传递过来的当前页参数 ||1:防止无数据
    let page  = req.query.page || 1;
    // 每一页显示的数据条数
    let pagesize = 10;
    // 查询用户数据的总数
    let count = await User.countDocuments({});
    // 总页数 ceil向上取整
    let total = Math.ceil(count / pagesize);
    // 页码对应的数据查询开始位置
    let start = (page - 1) * pagesize; 

    //查询用户信息 limit限制每页  skip开始位置
    let users = await User.find({}).limit(pagesize).skip(start);

	res.render('admin/user',{
        users: users,
        page: page,
        total: total
    });
};
