const User = require('server/models')['user'];

function getAllUsers(req, res) {
	User.find({}, function(err, users) {
		res.json(users);
	});
}

module.exports = getAllUsers;