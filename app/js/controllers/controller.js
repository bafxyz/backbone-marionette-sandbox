/*global define*/
define([
	'jquery',
	'backbone',
	'marionette',
	'views/pages/home',
	'views/pages/about'
], function ($, Backbone, Marionette) {
	'use strict';

	var AppController = Marionette.Controller.extend({

		switchPage: function (id) {
			// id (home || about)
			require(['views/pages/' + id], function (PageView) {
				app.layout.getRegion('content').show(new PageView);
			})
		}
	})

	return AppController;
});
