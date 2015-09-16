/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/app.tmpl',
	'views/header',
	'views/pages/home',
	'views/footer'
], function ($, _, Backbone, Marionette, tpl, HeaderView, ContentView, FooterView) {
	'use strict';

	// Our overall **AppLayout** is the top-level piece of UI.
	var AppLayoutView = Marionette.LayoutView.extend({

		template: tpl,

		className: 'o-app',

		regions: {
			header: '#header',
			content: '#content',
			footer: '#footer'
		},

		onBeforeShow: function () {
			this.getRegion('header').show(new HeaderView());
			this.getRegion('content').show(new ContentView());
			this.getRegion('footer').show(new FooterView());
		}
	});

	return AppLayoutView;
});
