module.exports = {
	subscribtionButton:{
		onClick(callback){
			callback('https://google.com');
		}
	},
	unsubscribtionButton:{
		onClick(callback){
			callback('https://google.com');
		}
	},
	serachField: {
		onSubmit(callback){
			let value = element.value;
			callback(value);
		}
	},
	searchResult: {
		render(){}
	}
};