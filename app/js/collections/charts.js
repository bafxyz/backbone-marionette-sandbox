/*global define */
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/chart'
], function (_, Backbone, Store, Chart) {
	'use strict';

	var ChartsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Chart,

		// Save all of the chart items under the `"charts"` namespace.
		localStorage: new Store('charts-backbone')
	});

	return new ChartsCollection();
});
