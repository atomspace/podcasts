module.exports = {
    use: [
		['@atomspace/eslint', {
			eslint: {
			  envs: ['browser', 'node']
			}
		  }],
      '@neutrinojs/web'
    ]
};