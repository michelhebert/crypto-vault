"use strict";



define('crypto-vault/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    namespace: 'v1',
    host: 'https://api.coinmarketcap.com',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
});
define('crypto-vault/app', ['exports', 'crypto-vault/resolver', 'ember-load-initializers', 'crypto-vault/config/environment', 'crypto-vault/models/custom-inflector-rules'], function (exports, _resolver, _emberLoadInitializers, _environment) {
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
define('crypto-vault/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
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
define('crypto-vault/helpers/app-version', ['exports', 'crypto-vault/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
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
define('crypto-vault/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('crypto-vault/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('crypto-vault/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crypto-vault/config/environment'], function (exports, _initializerFactory, _environment) {
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
define('crypto-vault/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
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
define('crypto-vault/initializers/data-adapter', ['exports'], function (exports) {
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
define('crypto-vault/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('crypto-vault/initializers/export-application-global', ['exports', 'crypto-vault/config/environment'], function (exports, _environment) {
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
define('crypto-vault/initializers/injectStore', ['exports'], function (exports) {
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
define('crypto-vault/initializers/store', ['exports'], function (exports) {
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
define('crypto-vault/initializers/transforms', ['exports'], function (exports) {
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
define("crypto-vault/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
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
define('crypto-vault/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('crypto-vault/router', ['exports', 'crypto-vault/config/environment'], function (exports, _environment) {
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
  });

  exports.default = Router;
});
define('crypto-vault/routes/list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return this.get('store').query('ticker', { limit: 5 });
    }
  });
});
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
define('crypto-vault/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
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
define("crypto-vault/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hStIKYEx", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"page-wrapper\"],[7],[0,\"\\n  \"],[6,\"header\"],[9,\"role\",\"banner\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Coin vault\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"main\"],[9,\"role\",\"main\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"footer\"],[9,\"role\",\"contentinfo\"],[7],[0,\"\\n    coin vault footer\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/application.hbs" } });
});
define("crypto-vault/templates/components/table-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YxVbHr2v", "block": "{\"symbols\":[],\"statements\":[[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[18,\"rank\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"currentClass\"],null],[7],[8],[1,[18,\"name\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[18,\"symbol\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[1,[25,\"format-currency\",[[19,0,[\"price_usd\"]]],null],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[9,\"class\",\"btc-symbol\"],[7],[8],[1,[18,\"price_btc\"],false],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent1hChangeIndicator\"],null],[7],[1,[18,\"percent_change_1h\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent24hChangeIndicator\"],null],[7],[1,[18,\"percent_change_24h\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"],[6,\"td\"],[9,\"scope\",\"col\"],[7],[6,\"span\"],[10,\"class\",[18,\"percent7dChangeIndicator\"],null],[7],[1,[18,\"percent_change_7d\"],false],[0,\"%\"],[8],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/components/table-row.hbs" } });
});
define("crypto-vault/templates/list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z6ghJRN3", "block": "{\"symbols\":[\"coin\"],\"statements\":[[6,\"table\"],[7],[0,\"\\n  \"],[6,\"caption\"],[7],[0,\"Current coins\"],[8],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-rank\"],[7],[0,\"Rank\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-name\"],[7],[0,\"Name\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-symbol\"],[7],[0,\"Symbol\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-price\"],[7],[0,\"Price USD\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-price_btc\"],[7],[0,\"Price BTC\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_1h\"],[7],[0,\"% 1h\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_24h\"],[7],[0,\"% 24h\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"table-header-percent_change_7d\"],[7],[0,\"% 7d\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"table-row\",null,[[\"name\",\"price_usd\",\"price_btc\",\"symbol\",\"rank\",\"percent_change_1h\",\"percent_change_24h\",\"percent_change_7d\"],[[19,1,[\"name\"]],[19,1,[\"price_usd\"]],[19,1,[\"price_btc\"]],[19,1,[\"symbol\"]],[19,1,[\"rank\"]],[19,1,[\"percent_change_1h\"]],[19,1,[\"percent_change_24h\"]],[19,1,[\"percent_change_7d\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "crypto-vault/templates/list.hbs" } });
});


define('crypto-vault/config/environment', [], function() {
  var prefix = 'crypto-vault';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("crypto-vault/app")["default"].create({"name":"crypto-vault","version":"0.0.0+2c7f09ea"});
}
//# sourceMappingURL=crypto-vault.map
