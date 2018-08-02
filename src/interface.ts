/**
 * @description interface collection
 */
// tslint:disable no-any no-unsafe-any
export interface ICamel {
    [key: string]: camel;
}

export type allCamel = string | ICamel;

export type camel = allCamel | allCamel[];

export function isCamel(obj: object): obj is ICamel {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

// array support: never / always / object
export interface IConf {
    array: string;
}
