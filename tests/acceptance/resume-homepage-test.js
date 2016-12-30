import { test } from 'qunit';
import moduleForAcceptance from 'resume-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | resume homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});


test('should list 3 skill headers.', function (assert) {
  visit('/skills');
  andThen(function () {
    assert.equal(find('h3.project-title').length, 3, 'should see 3 skill headers');
  });
});

