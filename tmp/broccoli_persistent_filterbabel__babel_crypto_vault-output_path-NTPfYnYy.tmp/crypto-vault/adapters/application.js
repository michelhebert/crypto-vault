define('crypto-vault/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTAdapter.extend({
		namespace: 'v1',
		host: 'https://api.coinmarketcap.com',
		headers: {
			'Access-Control-Allow-Origin': '*'
			// 'Access-Control-Allow-Headers': 'Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width',
			// 'Access-Control-Allow-Credentials': true,
			//'Access-Control-Allow-Method': 'GET'
		}
	});
});