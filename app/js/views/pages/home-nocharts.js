/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/pages/home-nocharts.tmpl'
], function ($, _, Backbone, Marionette, tpl) {
	'use strict';

	var NoChartsView = Marionette.ItemView.extend({

		template: tpl
	});

	return NoChartsView;
});
