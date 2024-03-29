'use strict';



;define('crypto-vault/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTAdapter.extend({
		namespace: 'v1',
		host: 'https://api.coinmarketcap.com'
		// headers: {
		// 	'Content-type': 'text-plain',
		// 	'Access-Control-Allow-Origin': '*',
		// 	'Access-Control-Allow-Headers': 'Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width'
		// // 	// 'Access-Control-Allow-Credentials': true,
		// // 	//'Access-Control-Allow-Method': 'GET'
		// }
	});
});
;define('crypto-vault/app', ['exports', 'crypto-vault/resolver', 'ember-load-initializers', 'crypto-vault/config/environment', 'crypto-vault/models/custom-inflector-rules'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('crypto-vault/components/file-field', ['exports', 'ember-uploader/components/file-field'], function (exports, _fileField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileField.default;
    }
  });
});
;define('crypto-vault/components/file-upload', ['exports', 'ember-uploader', '@ember'], function (exports, _emberUploader, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberUploader.default.FileField.extend({
    filesDidChange: function filesDidChange(files) {
      var uploader = _emberUploader.default.Uploader.create({
        url: this.get('url')
      });

      if (!_ember.default.isEmpty(files)) {
        // this second argument is optional and can to be sent as extra data with the upload
        uploader.upload(files[0]);
      }
    }
  });
});
;define('crypto-vault/components/table-row', ['exports'], function (exports) {
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
;define('crypto-vault/components/transaction-rows', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	var computed = Ember.computed;
	var scheduleOnce = Ember.run.scheduleOnce;
	exports.default = Component.extend({
		init: function init() {
			this._super.apply(this, arguments);
			this.neoAmount = [];
		},

		// rows: computed('transaction', function() {
		// 	this.formatValues(this.get('transaction'));
		// 	get(this, 'transaction')
		// 		.filterBy('Exchange', 'BTC-NEO')
		// 		.forEach(this.formatNeo, this);
		// }),
		didReceiveAttrs: function didReceiveAttrs() {
			this._super.apply(this, arguments);
			debugger;
			this.get('transaction.Quantity');
		},
		formatValues: function formatValues(val) {
			val['Type'] = val['Type'] === 'LIMIT_BUY' ? 'Buy' : 'Sell';
		},
		formatNeo: function formatNeo(val) {
			var quantity = Math.ceil(this.get('transaction.Quantity'));
			var amount = this.get('neoAmount');
			if (val['Type'] === 'Buy') {
				this.set('neoAmount', amount + quantity);
			} else {
				this.set('neoAmount', amount - quantity);
			}
		}
	});
});
;define('crypto-vault/components/transaction-table', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Component = Ember.Component;
	var computed = Ember.computed;
	var get = Ember.get;
	var set = Ember.set;
	var scheduleOnce = Ember.run.scheduleOnce;
	exports.default = Component.extend({
		init: function init() {
			this._super.apply(this, arguments);
			this.set('totalAmounts', 0);
			this.set('totalTradeAmount', 0);
		},

		transactionList: computed('model', function () {
			return get(this, 'model');
		})
	});
});
;define('crypto-vault/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('crypto-vault/controllers/list', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Controller = Ember.Controller;
	exports.default = Controller.extend({
		currencyCode: ['Australian', 'BRL', 'Canadian', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'Euro', 'Pound', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'ZAR'],
		currencyName: [{
			'AUD': 'Australian',
			'BRL': 'BRL',
			'CAD': 'Canadian',
			'CHF': 'CHF',
			'CLP': 'CLP',
			'CNY': 'CNY',
			'CZK': 'CZK',
			'DKK': 'DKK',
			'EUR': 'Euro',
			'GBP': 'Pound',
			'HKD': 'HKD',
			'HUF': 'HUF',
			'IDR': 'IDR',
			'ILS': 'ILS',
			'INR': 'INR',
			'JPY': 'JPY',
			'KRW': 'KRW',
			'MXN': 'MXN',
			'MYR': 'MYR',
			'NOK': 'NOK',
			'NZD': 'NZD',
			'PHP': 'PHP',
			'PKR': 'PKR',
			'PLN': 'PLN',
			'RUB': 'RUB',
			'SEK': 'SEK',
			'SGD': 'SGD',
			'THB': 'THB',
			'TRY': 'TRY',
			'TWD': 'TWD',
			'ZAR': 'ZAR'
		}],
		actions: {
			currencySwitcher: function currencySwitcher(cur) {
				alert('what currency you need ' + cur);
			}
		}
	});
});
;define('crypto-vault/controllers/transaction-history', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({});
});
;define('crypto-vault/helpers/app-version', ['exports', 'crypto-vault/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('crypto-vault/helpers/format-currency', ['exports', 'ember-format-currency/helpers/format-currency'], function (exports, _formatCurrency) {
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
;define('crypto-vault/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define('crypto-vault/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define('crypto-vault/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define('crypto-vault/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define('crypto-vault/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define('crypto-vault/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define('crypto-vault/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define('crypto-vault/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define('crypto-vault/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define('crypto-vault/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define('crypto-vault/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define('crypto-vault/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define('crypto-vault/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define('crypto-vault/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define('crypto-vault/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define('crypto-vault/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define('crypto-vault/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define('crypto-vault/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define('crypto-vault/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define('crypto-vault/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define('crypto-vault/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('crypto-vault/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('crypto-vault/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define('crypto-vault/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define('crypto-vault/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crypto-vault/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('crypto-vault/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('crypto-vault/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
;define('crypto-vault/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('crypto-vault/initializers/export-application-global', ['exports', 'crypto-vault/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('crypto-vault/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
;define('crypto-vault/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
;define('crypto-vault/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
;define("crypto-vault/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('crypto-vault/models/custom-inflector-rules', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var inflector = _emberInflector.default.inflector;

  inflector.uncountable('ticker');

  // Meet Ember Inspector's expectation of an export
  exports.default = {};
});
;define('crypto-vault/models/ticker', ['exports', 'ember-data'], function (exports, _emberData) {
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
;define('crypto-vault/models/transaction-history', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    OrderUuid: _emberData.default.attr('string'),
    Exchange: _emberData.default.attr('string'),
    Type: _emberData.default.attr('string'),
    Quantity: _emberData.default.attr('number'),
    Limit: _emberData.default.attr('number'),
    CommissionPaid: _emberData.default.attr('number'),
    Price: _emberData.default.attr('number'),
    Opened: _emberData.default.attr('string'),
    Closed: _emberData.default.attr('string')
  });
});
;define('crypto-vault/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('crypto-vault/router', ['exports', 'crypto-vault/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('list');
    this.route('transaction-history');
  });

  exports.default = Router;
});
;define('crypto-vault/routes/list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return this.get('store').query('ticker', { limit: 10 });
    }
  });
});
;define('crypto-vault/routes/transaction-history', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	exports.default = Route.extend({
		model: function model() {
			this._super.apply(this, arguments);
			return [{
				OrderUuid: '7373y7ac-bd7b-439c-3434-8s88sd8sd8ds',
				Exchange: 'BTC-SHIFT',
				Type: 'LIMIT_SELL',
				Quantity: 1.0,
				Limit: 0.001,
				CommissionPaid: 0.000001,
				Price: 0.000111,
				Opened: '2/20/2018 12:47:22 AM',
				Closed: '2/20/2018 12:47:23 AM'
			}];
		},
		setupController: function setupController(controller, model) {
			this._super.apply(this, arguments);
			controller.set('model', model);
		}
	});
});
;define('crypto-vault/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
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
;define('crypto-vault/serializers/transaction-history', ['exports', 'crypto-vault/serializers/application'], function (exports, _application) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _application.default.extend({
		// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		// 	debugger;
		// 	// payload.Type =
		// 	// OrderUuid: '987de6e5d55g-3b2c-77ce-bb45-f22f98dss8d8',
		// 	// 		Exchange: 'BTC-NEO',
		// 	// 		Type: 'LIMIT_BUY',
		// 	// 		Quantity: 34.34343434,
		// 	// 		Limit: 0.00014445,
		// 	// 		CommissionPaid: 0.00003528,
		// 	// 		Price: 0.01411385,
		// 	// 		Opened: '10/11/2018 11:24:53 PM',
		// 	// 		Closed: '10/12/2018 3:03:13 AM'
		// 	return this._super(...arguments);
		// }
	});
});
;define('crypto-vault/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('crypto-vault/services/moment', ['exports', 'ember-moment/services/moment', 'crypto-vault/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
;define("crypto-vault/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iy1J6niK", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"page-wrapper\"],[7],[0,\"\\n  \"],[6,\"header\"],[9,\"role\",\"banner\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Coin vault\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"main\"],[9,\"role\",\"main\"],[7],[0,\"\\n  \\t\"],[6,\"nav\"],[9,\"role\",\"navigation\"],[7],[0,\"\\n  \\t\\t\"],[6,\"ul\"],[7],[0,\"\\n  \\t\\t\\t\"],[6,\"li\"],[7],[4,\"link-to\",[\"list\"],null,{\"statements\":[[0,\"List altcoins\"]],\"parameters\":[]},null],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"li\"],[7],[4,\"link-to\",[\"transaction-history\"],null,{\"statements\":[[0,\"Txn History\"]],\"parameters\":[]},null],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"li\"],[7],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"li\"],[7],[8],[0,\"\\n  \\t\\t\"],[8],[0,\"\\n  \\t\"],[8],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"footer\"],[9,\"role\",\"contentinfo\"],[7],[0,\"\\n    coin vault footer\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/application.hbs" } });
});
;define("crypto-vault/templates/components/file-upload", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dm5eUlbQ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/components/file-upload.hbs" } });
});
;define("crypto-vault/templates/components/table-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YxVbHr2v", "block": "{\"symbols\":[],\"statements\":[[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[18,\"rank\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"currentClass\"],null],[7],[8],[1,[18,\"name\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[18,\"symbol\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[25,\"format-currency\",[[19,0,[\"price_usd\"]]],null],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[9,\"class\",\"btc-symbol\"],[7],[8],[1,[18,\"price_btc\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent1hChangeIndicator\"],null],[7],[1,[18,\"percent_change_1h\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent24hChangeIndicator\"],null],[7],[1,[18,\"percent_change_24h\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent7dChangeIndicator\"],null],[7],[1,[18,\"percent_change_7d\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/components/table-row.hbs" } });
});
;define("crypto-vault/templates/components/transaction-rows", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N30r7Vax", "block": "{\"symbols\":[],\"statements\":[[6,\"tr\"],[7],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"OrderUuid\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Exchange\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Type\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Quantity\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Limit\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"CommissionPaid\"]],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Price\"]],false],[8],[0,\"\\n\"],[0,\"\\t\"],[6,\"td\"],[7],[1,[25,\"moment-format\",[[19,0,[\"transaction\",\"Opened\"]],\"ddd, MMM Do YYYY (h:mm:ss A)\",\"M/DD/YYYY h:mm:ss A\"],null],false],[8],[0,\"\\n\\t\"],[6,\"td\"],[7],[1,[20,[\"transaction\",\"Closed\"]],false],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/components/transaction-rows.hbs" } });
});
;define("crypto-vault/templates/components/transaction-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LuGDZG7n", "block": "{\"symbols\":[\"transaction\"],\"statements\":[[1,[18,\"total\"],false],[0,\"\\n\"],[6,\"table\"],[7],[0,\"\\n\\t\"],[6,\"thead\"],[7],[0,\"\\n\\t\\t\"],[6,\"tr\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Order ID\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Buy/Sell pair\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Type\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Quantity\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Limit\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Commission paid\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Price\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Opened\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"th\"],[7],[0,\"Closed\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"transactionList\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[1,[25,\"transaction-rows\",null,[[\"transaction\",\"neoAmount\"],[[19,1,[]],[19,0,[\"total\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/components/transaction-table.hbs" } });
});
;define("crypto-vault/templates/list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G331F0RI", "block": "{\"symbols\":[\"coin\",\"conversion\",\"index\"],\"statements\":[[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"currencySwitcher\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"currencyCode\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[10,\"value\",[19,3,[]],null],[7],[1,[19,2,[]],false],[8],[0,\"\\n\"]],\"parameters\":[2,3]},null],[8],[0,\"\\n\"],[6,\"table\"],[7],[0,\"\\n  \"],[6,\"caption\"],[7],[0,\"Current coins\"],[8],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-rank\"],[7],[0,\"Rank\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-name\"],[7],[0,\"Name\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-symbol\"],[7],[0,\"Symbol\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-price\"],[7],[0,\"Price USD\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-price_btc\"],[7],[0,\"Price BTC\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_1h\"],[7],[0,\"% 1h\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_24h\"],[7],[0,\"% 24h\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_7d\"],[7],[0,\"% 7d\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"table-row\",null,[[\"name\",\"price_usd\",\"price_btc\",\"symbol\",\"rank\",\"percent_change_1h\",\"percent_change_24h\",\"percent_change_7d\"],[[19,1,[\"name\"]],[19,1,[\"price_usd\"]],[19,1,[\"price_btc\"]],[19,1,[\"symbol\"]],[19,1,[\"rank\"]],[19,1,[\"percent_change_1h\"]],[19,1,[\"percent_change_24h\"]],[19,1,[\"percent_change_7d\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/list.hbs" } });
});
;define("crypto-vault/templates/transaction-history", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oBOSlMjL", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[1,[25,\"transaction-table\",null,[[\"model\"],[[19,0,[\"model\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/transaction-history.hbs" } });
});
;define('crypto-vault/uploaders/s3', ['exports', 'ember-uploader/uploaders/s3'], function (exports, _s) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _s.default;
    }
  });
});
;define('crypto-vault/uploaders/uploader', ['exports', 'ember-uploader/uploaders/uploader'], function (exports, _uploader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uploader.default;
    }
  });
});
;

;define('crypto-vault/config/environment', [], function() {
  var prefix = 'crypto-vault';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("crypto-vault/app")["default"].create({"name":"crypto-vault","version":"0.1.0+3a7f6ac5"});
          }
        
//# sourceMappingURL=crypto-vault.map
