/**
 * @description canel
 */
import { isArray, isObject, isString } from '@/help';
import { allCamel, camel, ICamel, IConf } from '@/interface';
import trans from '@/transform';

// tslint:disable no-any no-unsafe-any

const config: IConf = {
    array: 'never',
};

const camelTrans: Function = (input: camel, conf?: IConf): camel => {
    if (conf) {
        Object.assign(config, conf);
    }
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
                if (config.array === 'never') {
                    result[<string>camelTrans(i)] = input[i];
                } else if (config.array === 'always') {
                    result[<string>camelTrans(i)] = camelTrans(input[i]);
                } else if (config.array === 'object') {
                    const arr: any[] = [];
                    for (
                        let j: number = 0;
                        j < (<any[]>input[i]).length;
                        j = j + 1
                    ) {
                        if (isObject((<any[]>input[i])[j])) {
                            arr[j] = camelTrans((<any[]>input[i])[j]);
                        } else {
                            arr[j] = (<any[]>input[i])[j];
                        }
                    }
                    result[<string>camelTrans(i)] = arr;
                }
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
