/**
 * @description canel
 */
import { isArray, isObject, isString } from '@/help';
import { allCamel, camel, ICamel } from '@/interface';
import trans from '@/transform';

// tslint:disable no-any no-unsafe-any

const camelTrans: Function = (input: camel): camel => {
    if (isArray(input)) {
        // type ICamel[]
        return input.map(
            (v: allCamel): allCamel => {
                return <allCamel>camelTrans(v);
            },
        );
        // } else if (isCamel(input)) {
    } else if (isObject(input)) {
        // typ ICamel
        const result: ICamel = {};
        const keys: string[] = Object.keys(input);
        for (const i of keys) {
            if (isObject(input[i])) {
                result[<string>camelTrans(i)] = camelTrans(input[i]);
            } else if (isArray(input[i])) {
                // default not to trans Array in object key
                // as it may just be a value
                result[<string>camelTrans(i)] = input[i];
            } else {
                result[<string>camelTrans(i)] = input[i];
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

// camelTrans.config = {};

export default camelTrans;
