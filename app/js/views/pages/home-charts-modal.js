/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/pages/home-charts-modal.tmpl'
], function ($, _, Backbone, Marionette, tpl) {
	'use strict';

	var ChartsModalRegion = Marionette.Region.extend({

		attachHtml: function (view) {
			// Some effect to show the view:
			this.$el.empty().append(view.el);
			this.$el.hide().slideDown('fast');
		}
	});

	return ChartsModalRegion;
});
