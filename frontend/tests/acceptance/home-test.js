import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';

module('Acceptance | Variants Index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('the happy path', async function(assert) {
    await visit('/');
    assert.dom('.variant-row').exists({ count: 3 });
    assert.dom('h1').hasText('Variants');
  });
});
