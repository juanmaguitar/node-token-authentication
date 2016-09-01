const User = require('../../../models/User');

function getAllUsers(req, res) {
	User.find({}, function(err, users) {
		res.json(users);
	});
}

module.exports = getAllUsers;