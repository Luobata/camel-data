/**
 * @description interface collection
 */
// tslint:disable no-any no-unsafe-any
export interface ICamel {
    [key: string]: string | ICamel | ICamel[];
}

export type camel = string | ICamel | ICamel[];

export const isCamel: Function = (obj: object): boolean => {
    return true;
};
