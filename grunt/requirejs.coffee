module.exports =
	browser:
		options:
			name: 'require-config'
			# optimize: 'uglify2'
			optimize: 'none'
			baseUrl: 'app/js'
			mainConfigFile: 'app/js/require-config.js'
			out: 'dist/scripts/main.js'
			generateSourceMaps: true
			preserveLicenseComments: false
			useStrict: true
			findNestedDependencies: true
