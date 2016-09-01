function check(req, res) {
	res.json(req.decoded);
}

module.exports = check;