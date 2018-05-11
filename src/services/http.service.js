module.exports = {
	get(url){
		return new Promise(function(resolve){
			resolve(url);
		});
	},
	post(url, payload){},
	put(url, payload){},
	delete(url){},
	head(){}
};