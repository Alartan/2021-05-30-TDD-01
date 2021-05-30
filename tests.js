/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}

test('getChange(1, 1) should return [] - an empty array', (assert) => {
  var result = getChange(1, 1);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(215, 300) should return [50, 20, 10, 5]', (assert) => {
  var result = getChange(215, 300);
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
});

test('getChange(486, 600) should return [100, 10, 2, 2]', (assert) => {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});

test('getChange(12, 600) should return [200, 200, 100, 50, 20, 10, 5, 2, 1]', (assert) => {
  var result = getChange(12, 600);
  var expected = [200, 200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});

test('getChange_reduce(12, 600) should return [200, 200, 100, 50, 20, 10, 5, 2, 1]', (assert) => {
  var result = getChange_reduce(12, 600);
  var expected = [200, 200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests