let ui = require('../services/ui.service');
let subscribtions = require('../services/subscriptions');

ui.subscribtionButton.onClick((url) => {
	subscribtions.add(url);
});

ui.unsubscribtionButton.onClick((url) => {
	subscribtions.remove(url);
});