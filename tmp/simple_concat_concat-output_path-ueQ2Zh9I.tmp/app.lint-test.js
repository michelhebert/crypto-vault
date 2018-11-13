QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/file-upload.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/file-upload.js should pass ESLint\n\n');
});

QUnit.test('components/table-row.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/table-row.js should pass ESLint\n\n');
});

QUnit.test('controllers/list.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/list.js should pass ESLint\n\n');
});

QUnit.test('models/custom-inflector-rules.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
});

QUnit.test('models/ticker.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/ticker.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/list.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/list.js should pass ESLint\n\n');
});

QUnit.test('serializers/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'serializers/application.js should pass ESLint\n\n4:60 - \'requestType\' is defined but never used. (no-unused-vars)');
});

