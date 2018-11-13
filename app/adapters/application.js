import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'v1',
	host: 'https://api.coinmarketcap.com',
	// headers: {
	// 	'Content-type': 'text-plain',
	// 	'Access-Control-Allow-Origin': '*',
	// 	'Access-Control-Allow-Headers': 'Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width'
	// // 	// 'Access-Control-Allow-Credentials': true,
	// // 	//'Access-Control-Allow-Method': 'GET'
	// }
});