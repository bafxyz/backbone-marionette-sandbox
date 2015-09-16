/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/header.tmpl'
], function ($, _, Backbone, Marionette, tpl) {
	'use strict';

	var HeaderView = Marionette.ItemView.extend({

		template: tpl,

		className: 'header-inner',

		ui: {
			menu: '.c-nav__item'
		},

		events: {
			'click @ui.menu': 'getMenuUrl'
		},

		getMenuUrl: function (e) {
			var pageName = e.currentTarget.getAttribute('data-page-name');
			app.controller.switchPage(pageName);
		}
	});

	return HeaderView;
});
