import range from '../../src/utils/range';

import test from 'tape';

test('range', function (t) {
  t.equal(typeof range, 'function');
  t.deepEqual(range(3, 5), [3,4,5]);
  // t.deepEqual(range(5, 3), [3,4,5]);
  t.end();
});
