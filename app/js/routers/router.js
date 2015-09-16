/*global define*/
define([
	'jquery',
	'backbone',
	'marionette'
], function ($, Backbone, Marionette) {
	'use strict';

	var AppRouter = Marionette.AppRouter.extend({
		appRouter: {
			'page/*': 'switchPage'
		}
	});

	return AppRouter;
});
