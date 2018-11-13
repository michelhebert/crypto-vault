import { moduleForModel, test } from 'ember-qunit';

moduleForModel('transaction-history', 'Unit | Serializer | transaction history', {
  // Specify the other units that are required for this test.
  needs: ['serializer:transaction-history']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
