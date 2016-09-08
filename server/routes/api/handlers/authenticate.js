const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('server/models')['user'];

const SECRET = require('config').secret;
const debug = require('debug')('routes:api:authenticate');

function authenticate(req, res) {

	//console.log(req.body)
	// find the user

	console.log (req.body)

	User
		.findOne({ username: req.body.username})
		.then( (user) => {

			console.log (user);

			if (!user) {

				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});

			} else if (user) {

				user.comparePassword(req.body.password)
					.then(function(result) {
						console.log(result)
					})
					.catch(function(err) {
						console.log(err)
					})

				var hashedPass = User.hashPassword(req.body.password);
				debug(hashedPass)
				debug(user.password)
				// check if password matches
				if (user.password != hashedPass) {

					res.json({
						success: false,
						message: 'Authentication failed. Wrong password.'
					});

				} else {

					debug(SECRET);
					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, SECRET, {
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