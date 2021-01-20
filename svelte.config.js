const sveltePreprocess = require('svelte-preprocess')
const mosaicPreprocessor = require('./src/mosaic/preprocessor')
const path = require('path')

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mosaicPreprocessor({
			artifactDirectory: path.join(__dirname, 'generated'),
			artifactDirectoryAlias: '$generated',
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can() create optimized builds for different platforms by
		// specifying a difPferent adapter
		adapter: '@sveltejs/adapter-node',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
}
