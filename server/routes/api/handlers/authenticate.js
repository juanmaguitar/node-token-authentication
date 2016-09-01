const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('../../../models/User');
const config = require('../../../config'); // get our config file

function authenticate(req, res) {

	//console.log(req.body)
	// find the user
	User
		.findOne({ name: req.body.name})
		.then( (user) => {

			user = user._doc;

			if (!user) {

				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});

			} else if (user) {

				// check if password matches
				if (user.password != req.body.password) {

					res.json({
						success: false,
						message: 'Authentication failed. Wrong password.'
					});

				} else {

					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, config.secret, {
						expiresIn: 86400 // expires in 24 hours
					});

					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}

			}

		})
		.catch( (err) => { throw err } );

}

module.exports = authenticate;