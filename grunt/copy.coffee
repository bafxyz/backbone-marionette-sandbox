module.exports =
	tmp:
		cwd: 'app'
		dest: 'dist'
		expand: true
		dot: true
		src: [
			'index.html'
			'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
			'bower_components/requirejs/require.js'
			'bower_components/requirejs-text/text.js'
		]
