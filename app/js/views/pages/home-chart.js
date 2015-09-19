/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/pages/home-chart.tmpl',
	'highcharts'
], function ($, _, Backbone, Marionette, tpl, highcharts) {
	'use strict';

	var ChartView = Marionette.ItemView.extend({

		template: tpl,

		tagName: 'li',

		className: 'c-charts__item',

		ui: {
			expand: '.c-btn-expand-chart'
		},

		events: {
			'click @ui.expand': 'showModal'
		},

		onRender: function () {
			this.$el.find('.c-chart').highcharts(this.model.toJSON());
		},

		showModal: function () {
			var self = this;
			app.HomeView.modal.show(self);
		}

	});

	return ChartView;
});
