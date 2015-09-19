module.exports =
	tmp:
		cwd: 'app'
		dest: 'dist'
		expand: true
		dot: true
		src: [
			'data.json'
			'index.html'
			'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
			'bower_components/requirejs/require.js'
			'bower_components/requirejs-text/text.js'
		]
