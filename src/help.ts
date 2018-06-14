/**
 * @description type help
 */
// tslint:disable no-any no-unsafe-any

export function isString(obj: any): obj is string {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export function isArray(obj: any): obj is any[] {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isObject(obj: any): obj is object {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
