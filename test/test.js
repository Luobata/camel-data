const camel = require('../dist/camel-data').default;

global.camel = camel;

describe('camel data', () => {
    describe('test string', () => {
        require('./camel-string');
    });
    describe('teste ICamel & ICamel[]', () => {
        require('./camel-ICamel');
    });
});
