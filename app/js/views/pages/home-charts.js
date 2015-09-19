/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'views/pages/home-chart',
	'views/pages/home-nocharts'
], function ($, _, Backbone, Marionette, ChartView, NoChartsView) {
	'use strict';

	var ChartsView = Marionette.CollectionView.extend({

		tagName: 'ul',

		className: 'c-charts',

		// Single chart view
		childView: ChartView,

		// When no charts
		emptyView: NoChartsView
	});

	return ChartsView;
});
