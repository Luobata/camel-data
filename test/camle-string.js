/* eslint-disable */
const assert = require('assert');
let result;

it('basic usage', function(done) {
    result = camel('user_name');
    assert.equal(result, 'userName');
});
