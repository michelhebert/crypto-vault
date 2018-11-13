define('crypto-vault/models/ticker', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    'name': _emberData.default.attr('string'),
    'symbol': _emberData.default.attr('string'),
    'rank': _emberData.default.attr('number'),
    'price_usd': _emberData.default.attr('number'),
    'price_btc': _emberData.default.attr('number'),
    '24h_volume_usd': _emberData.default.attr('number'),
    'market_cap_usd': _emberData.default.attr('number'),
    'available_supply': _emberData.default.attr('number'),
    'total_supply': _emberData.default.attr('number'),
    'percent_change_1h': _emberData.default.attr('number'),
    'percent_change_24h': _emberData.default.attr('number'),
    'percent_change_7d': _emberData.default.attr('number'),
    'last_updated': _emberData.default.attr('number')
  });
});