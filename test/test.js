const camel = require('../dist/camel-data').default;

global.camel = camel;

describe('camel data', () => {
    describe('test string', () => {
        require('./camel-string');
    });
    describe('test array', () => {
        require('./camel-array');
    });
    describe('teste ICamel & ICamel[]', () => {
        require('./camel-ICamel');
    });
});
