/**
 * @description canel
 */
import { allCamel, camel, isCamel, ICamel } from '@/interface';
import trans from '@/transform';
import { isArray, isObject } from 'util';

const camelTrans = (input: camel): camel => {
    if (typeof input === 'string') {
        return trans(input);
    }
    if (isArray(input)) {
        // ICamel[]
        return input.map(
            (v: allCamel): allCamel => {
                return <allCamel>camelTrans(v);
            },
        );
    } else if (isCamel(input)) {
        // ICamel
        const result: ICamel = {};
        const keys = Object.keys.call(input);
        for (const i of keys) {
            result[i] = camelTrans(keys[i]);
        }

        return result;
    } else {
        // string
        return trans(input);
    }
};

export default camelTrans;
