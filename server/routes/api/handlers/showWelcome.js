function showWelcome(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
}

module.exports = showWelcome;