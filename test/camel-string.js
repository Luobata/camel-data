/* eslint-disable */
const assert = require('assert');
let result;

it('basic usage', function() {
    result = camel('user_name');
    assert.equal(result, 'userName');

    result = camel('function-name');
    assert.equal(result, 'functionName');
});
