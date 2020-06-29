#基于Nodejs的博客系统（管理员系统和普通用户系统）

#Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台，是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎。我们使用它来搭建整个博客系统，减少了许多配置的工作量。

#Express框架：可以设置中间件来响应 HTTP 请求；定义路由表用于执行不同的 HTTP 请求动作。

#art模板：与jsp的作用相似，用于动态生成html元素。

#Mongodb数据库：mongodb是集合类型的，每个集合里存储的是对象，mongodb里存储的数据类型类似于json。


#通过以上的Nodejs+Express+art+Mongodb组合，根据博客需求，开发了SoBlog网站。

#SoBlog登录注册首页：http://www.sosodiduck.xyz:8080/admin/login

#SoBlog文章首页：http://www.sosodiduck.xyz:8080/home

（项目备注:node_modules文件夹为项目的各模板配置文件，对应的版本在package.json中记录）
( 项目体验备注：注册新用户后只能为普通用户，访问用户界面；
                若想体验超级管理员，可使用以下账号：	20170808@qq.com，密码0516soso 。
                请勿随意删改用户及文章信息
)
  
