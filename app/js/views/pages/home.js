/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/pages/home.tmpl',
	'collections/charts',
	'views/pages/home-charts',
	'views/pages/home-charts-modal'
], function ($, _, Backbone, Marionette, tpl, ChartsCollection, ChartsView, ChartsModalRegion) {
	'use strict';

	var HomeView = Marionette.LayoutView.extend({

		template: tpl,

		className: 'home-inner',

		regions: {
			charts: '.charts',
			modal: {
				regionClass: ChartsModalRegion,
				selector: '.charts-modal'
			}
		},

		initialize: function () {
			app.HomeView = this;
		},

		onRender: function () {
			var self = this;

			// Get data from json
			$.getJSON('http://localhost:9001/data.json', function (result) {
				self.charts.show(new ChartsView({ collection: new ChartsCollection(result) }));
			}).error(function (jqXHR, textStatus, errorThrown) {
				console.log(textStatus);
			});
		}
	});

	return HomeView;
});
