const {User} = require('../../models/user');
module.exports = async(req, res) => {
	await User.findOneAndDelete({_id:req.query.id});
	res.redirect('/admin/user');
}