'use strict';

define('crypto-vault/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/file-upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-upload.js should pass ESLint\n\n');
  });

  QUnit.test('components/table-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table-row.js should pass ESLint\n\n');
  });

  QUnit.test('components/transaction-rows.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/transaction-rows.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)\n3:10 - \'scheduleOnce\' is defined but never used. (no-unused-vars)\n18:3 - Unexpected \'debugger\' statement. (no-debugger)');
  });

  QUnit.test('components/transaction-table.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/transaction-table.js should pass ESLint\n\n2:25 - \'set\' is defined but never used. (no-unused-vars)\n3:10 - \'scheduleOnce\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/transaction-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/transaction-history.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/ticker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/ticker.js should pass ESLint\n\n');
  });

  QUnit.test('models/transaction-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/transaction-history.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/list.js should pass ESLint\n\n');
  });

  QUnit.test('routes/transaction-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/transaction-history.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n4:60 - \'requestType\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/transaction-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/transaction-history.js should pass ESLint\n\n');
  });
});
define('crypto-vault/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('crypto-vault/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'crypto-vault/tests/helpers/start-app', 'crypto-vault/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('crypto-vault/tests/helpers/resolver', ['exports', 'crypto-vault/resolver', 'crypto-vault/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('crypto-vault/tests/helpers/start-app', ['exports', 'crypto-vault/app', 'crypto-vault/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('crypto-vault/tests/integration/components/file-upload-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('file-upload', 'Integration | Component | file upload', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "aj90Kxhq",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"file-upload\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0uPGwFxq",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"file-upload\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('crypto-vault/tests/integration/components/table-row-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('table-row', 'Integration | Component | table row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "iqORVb/2",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"table-row\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "OQpT5HM4",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table-row\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('crypto-vault/tests/integration/components/transaction-rows-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('transaction-rows', 'Integration | Component | transaction rows', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "C8sMd9Dh",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"transaction-rows\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "erTw/2ns",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"transaction-rows\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('crypto-vault/tests/integration/components/transaction-table-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('transaction-table', 'Integration | Component | transaction table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "LVb44RGy",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"transaction-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "FO7TiKV6",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"transaction-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('crypto-vault/tests/test-helper', ['crypto-vault/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('crypto-vault/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/file-upload-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/file-upload-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/table-row-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-row-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/transaction-rows-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/transaction-rows-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/transaction-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/transaction-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/transaction-history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/transaction-history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/custom-inflector-rules-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/custom-inflector-rules-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/ticker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/ticker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/transaction-history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/transaction-history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/transaction-history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/transaction-history-test.js should pass ESLint\n\n');
  });
});
define('crypto-vault/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('crypto-vault/tests/unit/controllers/list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:list', 'Unit | Controller | list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crypto-vault/tests/unit/controllers/transaction-history-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:transaction-history', 'Unit | Controller | transaction history', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crypto-vault/tests/unit/models/custom-inflector-rules-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('custom-inflector-rules', 'Unit | Model | custom inflector rules', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('crypto-vault/tests/unit/models/ticker-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('ticker', 'Unit | Model | ticker', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('crypto-vault/tests/unit/routes/list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:list', 'Unit | Route | list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crypto-vault/tests/unit/routes/transaction-history-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:transaction-history', 'Unit | Route | transaction history', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crypto-vault/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('crypto-vault/tests/unit/serializers/transaction-history-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('transaction-history', 'Unit | Serializer | transaction history', {
    // Specify the other units that are required for this test.
    needs: ['serializer:transaction-history']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('crypto-vault/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
