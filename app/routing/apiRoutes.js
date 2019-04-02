var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

	app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        console.log(userInput);
		// var userResponses = userInput.scores;

		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 

		for (var i = 0; i < friends.length; i++) {

			var diff = 0;
			for (var x = 0; x < userResponses.length; x++) {
				diff += Math.abs(friends[x].scores[x] - userResponses[x]);
			}

			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};