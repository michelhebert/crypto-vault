define('crypto-vault/helpers/format-currency', ['exports', 'ember-format-currency/helpers/format-currency'], function (exports, _formatCurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatCurrency.default;
    }
  });
  Object.defineProperty(exports, 'formatCurrency', {
    enumerable: true,
    get: function () {
      return _formatCurrency.formatCurrency;
    }
  });
});