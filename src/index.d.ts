/**
 * @description declare
 */

import { camel, IConf } from '@/interface';

declare function camelTrans(input: camel, config?: IConf): camel;

export = camelTrans;
