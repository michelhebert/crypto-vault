define('crypto-vault/components/table-row', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    tagName: 'tr',
    currentClass: Ember.computed('symbol', function () {
      return 'icons-' + this.get('name').decamelize();
    }),
    percentChangeIndicator: function percentChangeIndicator(percentChange) {
      return !percentChange.indexOf('-') ? 'negative' : 'positive';
    },

    percent1hChangeIndicator: Ember.computed('percent_change_1h', function () {
      var percentChange = this.get('percent_change_1h').toString();
      return this.percentChangeIndicator(percentChange);
    }),
    percent24hChangeIndicator: Ember.computed('percent_change_24h', function () {
      var percentChange = this.get('percent_change_24h').toString();
      return this.percentChangeIndicator(percentChange);
    }),
    percent7dChangeIndicator: Ember.computed('percent_change_7d', function () {
      var percentChange = this.get('percent_change_7d').toString();
      return this.percentChangeIndicator(percentChange);
    })
  });
});