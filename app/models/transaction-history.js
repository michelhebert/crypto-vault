import DS from 'ember-data';

export default DS.Model.extend({
  OrderUuid: DS.attr('string'),
  Exchange: DS.attr('string'),
  Type: DS.attr('string'),
  Quantity: DS.attr('number'),
  Limit: DS.attr('number'),
  CommissionPaid: DS.attr('number'),
  Price: DS.attr('number'),
  Opened: DS.attr('string'),
  Closed: DS.attr('string')
});
