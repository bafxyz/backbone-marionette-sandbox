/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		modernizr: {
			exports: 'Modernizr'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		marionette: {
			deps: [
				'backbone'
			],
			exports: 'Marionette'
		},
		backboneLocalstorage: {
			deps: [
				'backbone'
			],
			exports: 'Store'
		}
	},
	paths: {
		modernizr: '../bower_components/modernizr/modernizr',
		jquery: '../bower_components/jquery/dist/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
		backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
		text: '../bower_components/requirejs-text/text',
		highcharts: '../bower_components/highcharts/highcharts'
	}
});
require([
	'main',
	'options'
	], function (app, options) {

		window.app = app;

		app.on('start', function () {
			Backbone.history.start();
		});

		app.start(options);
	}
);
