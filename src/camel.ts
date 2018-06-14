/**
 * @description canel
 */
import { allCamel, camel, isCamel, ICamel } from '@/interface';
import trans from '@/transform';
import { isArray, isObject } from 'util';

function camelTrans(input: camel): camel {
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
        const keys: string[] = Object.keys(input);
        for (const i of keys) {
            // result[i] = camelTrans(i);
            result[<string>camelTrans(i)] = input[i];
        }

        return result;
    } else {
        // string
        return trans(input);
    }
}

export default camelTrans;
