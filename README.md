# camel-data

Format data to camel-case.

## Installation

```js
npm install --save camel-data
```

## Usage

```js
import camel from 'camel-data';

camel('module_id');
```

## API

camel:
`function camel(input: camel, config?: IConfig): camel`

type declare:(string Array or object is ok)

```js
interface ICamel {
    [key: string]: camel;
}

type allCamel = string | ICamel;

type camel = allCamel | allCamel[];

// array enum string for
// array: never(default). no camel for array value in object.
// array: always. camel all the value for array in object.
// array: object. camel object type in array for array in object.
interface IConf {
    array: string;
}
```
