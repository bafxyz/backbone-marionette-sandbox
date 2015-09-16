/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/pages/about.tmpl'
], function ($, _, Backbone, Marionette, tpl) {
	'use strict';

	var AboutView = Marionette.ItemView.extend({

		template: tpl,

		className: 'about-inner'
	});

	return AboutView;
});
