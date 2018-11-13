import DS from 'ember-data';

export default DS.Model.extend({
  'name': DS.attr('string'),
  'symbol': DS.attr('string'),
  'rank': DS.attr('number'),
  'price_usd': DS.attr('number'),
  'price_btc': DS.attr('number'),
  '24h_volume_usd': DS.attr('number'),
  'market_cap_usd': DS.attr('number'),
  'available_supply': DS.attr('number'),
  'total_supply': DS.attr('number'),
  'percent_change_1h': DS.attr('number'),
  'percent_change_24h': DS.attr('number'),
  'percent_change_7d': DS.attr('number'),
  'last_updated': DS.attr('number')
});
