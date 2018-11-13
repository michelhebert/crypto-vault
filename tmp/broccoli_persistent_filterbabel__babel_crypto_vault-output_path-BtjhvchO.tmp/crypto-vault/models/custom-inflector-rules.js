define('crypto-vault/models/custom-inflector-rules', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var inflector = _emberInflector.default.inflector;

  inflector.uncountable('ticker');

  // Meet Ember Inspector's expectation of an export
  exports.default = {};
});