module.exports =
	gruntfile:
		files: ['Gruntfile.coffee']

	sass:
		files: [
			'app/sass/**/*.scss'
		]
		tasks: [
			'sass'
			'postcss'
		]
		options:
			livereload: true

	js:
		files: [
			'app/js/**/**/*.js'
			'app/js/templates/*.tmpl'
		]
		tasks: [
			'requirejs'
			'jscs'
		]
		options:
			livereload: true

	index:
		files: [
			'app/index.html'
		]
		tasks: [
			'copy'
		]
		options:
			livereload: true
