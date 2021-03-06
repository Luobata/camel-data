/**
 * @description canel
 */
import { isArray, isObject, isString } from '@/help';
import { allCamel, camel, ICamel, IConf } from '@/interface';
import trans from '@/transform';

// tslint:disable no-any no-unsafe-any

const camelTrans: Function = (input: camel, conf?: IConf): camel => {
    const config: IConf = {
        array: 'never',
    };

    if (conf) {
        Object.assign(config, conf);
    }
    if (isArray(input)) {
        // type ICamel[]
        return input.map(
            (v: allCamel): allCamel => {
                return <allCamel>camelTrans(v, conf);
            },
        );
        // } else if (isCamel(input)) {
    } else if (isObject(input)) {
        // typ ICamel
        const result: ICamel = {};
        const keys: string[] = Object.keys(input);
        for (const i of keys) {
            // 增加逻辑，如果i的对应存在则跳过并保留
            const camelKey: string = trans(i);
            if (camelKey !== i && input[camelKey] !== undefined) {
                result[i] = input[i];
            } else if (isObject(input[i])) {
                result[<string>camelTrans(i, conf)] = camelTrans(
                    input[i],
                    conf,
                );
            } else if (isArray(input[i])) {
                // default not to trans Array in object key
                // as it may just be a value
                if (config.array === 'never') {
                    result[<string>camelTrans(i, conf)] = input[i];
                } else if (config.array === 'always') {
                    result[<string>camelTrans(i, conf)] = camelTrans(
                        input[i],
                        conf,
                    );
                } else if (config.array === 'object') {
                    const arr: any[] = [];
                    for (
                        let j: number = 0;
                        j < (<any[]>input[i]).length;
                        j = j + 1
                    ) {
                        if (isObject((<any[]>input[i])[j])) {
                            arr[j] = camelTrans((<any[]>input[i])[j], conf);
                        } else {
                            arr[j] = (<any[]>input[i])[j];
                        }
                    }
                    result[<string>camelTrans(i, conf)] = arr;
                }
            } else {
                result[<string>camelTrans(i, conf)] = input[i];
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
