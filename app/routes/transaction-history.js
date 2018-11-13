import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		this._super(...arguments);
		return [
			{
				OrderUuid: '7373y7ac-bd7b-439c-3434-8s88sd8sd8ds',
				Exchange: 'BTC-SHIFT',
				Type: 'LIMIT_SELL',
				Quantity: 1.0,
				Limit: 0.001,
				CommissionPaid: 0.000001,
				Price: 0.000111,
				Opened: '2/20/2018 12:47:22 AM',
				Closed: '2/20/2018 12:47:23 AM'
			}
		];
	},
	setupController(controller, model) {
		this._super(...arguments);
		controller.set('model', model);
	}
});
