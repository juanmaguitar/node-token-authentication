const User = require('server/models')['user'];

function setup(req, res) {

	// create a sample user
	var nick = new User({
		name: 'Nick Cerminara',
		password: 'password',
		admin: true
	});

	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});

}

module.exports = setup