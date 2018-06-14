/**
 * @description type help
 */
// tslint:disable no-any no-unsafe-any
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * @description data transform to camel
 */
var trans = (function (input) {
    return input.replace(/[-_\.][^-_\.]/g, function (match) {
        return match.charAt(1).toUpperCase();
    });
});

/**
 * @description canel
 */
// tslint:disable no-any no-unsafe-any
var camelTrans = function camelTrans(input) {
    if (isArray(input)) {
        // type ICamel[]
        return input.map(function (v) {
            return camelTrans(v);
        });
        // } else if (isCamel(input)) {
    } else if (isObject(input)) {
        // typ ICamel
        var result = {};
        var keys = Object.keys(input);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (isObject(input[i])) {
                    result[camelTrans(i)] = camelTrans(input[i]);
                } else if (isArray(input[i])) {
                    // default not to trans Array in object key
                    // as it may just be a value
                    result[camelTrans(i)] = input[i];
                } else {
                    result[camelTrans(i)] = input[i];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return result;
    } else if (isString(input)) {
        // string
        return trans(input);
    } else {
        return input;
    }
};

export default camelTrans;
//# sourceMappingURL=camel.esm.js.map
