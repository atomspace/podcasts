let http = require('../services/http.service');

function formatSearchResult(response){
	return {};
}

module.exports = {
	search(text){
		return http.get(`http://feeds.rss?serch=${text}`)
			.then(formatSearchResult);
	}
};