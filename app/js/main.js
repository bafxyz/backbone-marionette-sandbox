/*global define*/
define([
	'modernizr',
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'views/app',
	'controllers/controller',
	'routers/router'
], function (Modernizr, $, _, Backbone, Marionette, AppLayoutView, AppController, AppRouter) {
	'use strict';

	var app = new Backbone.Marionette.Application();

	app.addRegions({
		appRegion: '#app'
	});

	app.addInitializer(function (options) {
		this.options = options;
		this.controller = new AppController();
		this.router = new AppRouter({
			controller: this.controller
		});
		this.layout = new AppLayoutView();
		this.layout.render();

		app.appRegion.show(this.layout);
	});

	return app;
});
