define('crypto-vault/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload.id = payload.id;
      payload.name = payload.name;
      payload.symbol = payload.symbol;
      payload.rank = payload.rank;
      payload.price_usd = payload.price_usd;
      payload.price_btc = payload.price_btc;
      payload['24h_volume_usd'] = payload['24h_volume_usd'];
      payload.market_cap_usd = payload.market_cap_usd;
      payload.available_supply = payload.available_supply;
      payload.total_supply = payload.total_supply;
      payload.percent_change_1h = payload.percent_change_1h;
      payload.percent_change_24h = payload.percent_change_24h;
      payload.percent_change_7d = payload.percent_change_7d;
      payload.last_updated = payload.last_updated;

      delete payload.id;
      delete payload.name;
      delete payload.symbol;
      delete payload.rank;
      delete payload.price_usd;
      delete payload.price_btc;
      delete payload['24h_volume_usd'];
      delete payload.market_cap_usd;
      delete payload.available_supply;
      delete payload.total_supply;
      delete payload.percent_change_1h;
      delete payload.percent_change_24h;
      delete payload.percent_change_7d;
      delete payload.last_updated;

      return this._super.apply(this, arguments);
    }
  });
});