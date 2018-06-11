/**
 * @description canel
 */
import { camel, isCamel } from '@/interface';
import trans from '@/transform';
import { isArray } from 'util';

export default (input: camel): camel => {
    if (typeof input === 'string') {
        return trans(input);
    }
    if (isArray(input)) {
        // ICamel[]
    } else if ()
};
