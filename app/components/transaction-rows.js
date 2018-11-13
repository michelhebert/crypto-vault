import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
	init() {
		this._super(...arguments);
		this.neoAmount = [];
	},
	// rows: computed('transaction', function() {
	// 	this.formatValues(this.get('transaction'));
	// 	get(this, 'transaction')
	// 		.filterBy('Exchange', 'BTC-NEO')
	// 		.forEach(this.formatNeo, this);
	// }),
	didReceiveAttrs() {
		this._super(...arguments);
		debugger;
		this.get('transaction.Quantity');
	},
	formatValues(val) {
		val['Type'] = val['Type'] === 'LIMIT_BUY' ? 'Buy' : 'Sell';
	},
	formatNeo(val) {
		let quantity = Math.ceil(this.get('transaction.Quantity'));
		let amount = this.get('neoAmount');
		if (val['Type'] === 'Buy') {
			this.set('neoAmount', amount + quantity);
		} else {
			this.set('neoAmount', amount - quantity);
		}
	}
});
