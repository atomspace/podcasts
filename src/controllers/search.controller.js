let ui = require('../services/ui.service');
let feeds = require('../services/feeds.service');

function renderSearchResult(serachResult){
	ui.searchResult.render(serachResult);
}

ui.searchField.onSubmit(function(text){
	feeds.search(text).then(renderSearchResult);
});