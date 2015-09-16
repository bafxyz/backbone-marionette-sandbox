module.exports =
	options:
		map: true
		processors: [
			require('lost')
			require('autoprefixer')(browsers: 'last 2 versions')
			require('cssnano')()
		]
	dist:
		src: 'dist/styles/*.css'
