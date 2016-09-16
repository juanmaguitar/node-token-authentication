const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('server/models')['user'];

const SECRET = require('config').secret;
const debug = require('debug')('routes:api:authenticate');

function authenticate(req, res) {

	const username = req.body.username;
	const password = req.body.password;

	User
		.findOne({ username }, "+password")
		.then( (user) => {

			if (!user) {

				res.status(404).json({
					success: false,
					message: 'Credentials not valid' // 'Authentication failed. User not found.'
				});

			} else if (user) {

				user.comparePassword(password)
					.then(function( areEqual ) {

						userPublicData = {
							name: user.name,
							username: user.username,
							email: user.email,
							roles: user.roles
						}

						var token = jwt.sign(userPublicData, SECRET, {
							expiresIn: 86400 // expires in 24 hours
						});

						res.json({
							success: true,
							message: 'Enjoy your token!',
							token: token
						});

					})
					.catch(function(err) {

						res.status(404).json({
							success: false,
							message: 'Credentials not valid' //'Authentication failed. Wrong password.'
						});

					})

			}

		})
		.catch( (err) => { throw err } );

}

module.exports = authenticate;