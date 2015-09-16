/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!templates/footer.tmpl'
], function ($, _, Backbone, Marionette, tpl) {
	'use strict';

	var FooterView = Marionette.ItemView.extend({

		template: tpl,

		className: 'footer-inner'
	});

	return FooterView;
});
