define('crypto-vault/controllers/list', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;
	exports.default = Controller.extend({
		currencyCode: ['Australian', 'BRL', 'Canadian', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'Euro', 'Pound', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'ZAR'],
		currencyName: [{
			'AUD': 'Australian',
			'BRL': 'BRL',
			'CAD': 'Canadian',
			'CHF': 'CHF',
			'CLP': 'CLP',
			'CNY': 'CNY',
			'CZK': 'CZK',
			'DKK': 'DKK',
			'EUR': 'Euro',
			'GBP': 'Pound',
			'HKD': 'HKD',
			'HUF': 'HUF',
			'IDR': 'IDR',
			'ILS': 'ILS',
			'INR': 'INR',
			'JPY': 'JPY',
			'KRW': 'KRW',
			'MXN': 'MXN',
			'MYR': 'MYR',
			'NOK': 'NOK',
			'NZD': 'NZD',
			'PHP': 'PHP',
			'PKR': 'PKR',
			'PLN': 'PLN',
			'RUB': 'RUB',
			'SEK': 'SEK',
			'SGD': 'SGD',
			'THB': 'THB',
			'TRY': 'TRY',
			'TWD': 'TWD',
			'ZAR': 'ZAR'
		}],
		actions: {
			currencySwitcher: function currencySwitcher(cur) {
				alert('what currency you need ' + cur);
			}
		}
	});
});