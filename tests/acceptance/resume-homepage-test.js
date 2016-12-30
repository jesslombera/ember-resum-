import { test } from 'qunit';
import moduleForAcceptance from 'resume-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | resume homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});


