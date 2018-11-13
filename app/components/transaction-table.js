import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
	init() {
		this._super(...arguments);
		this.set('totalAmounts', 0);
		this.set('totalTradeAmount', 0);
	},
	transactionList: computed('model', function() {
		return get(this, 'model');
	})
});
