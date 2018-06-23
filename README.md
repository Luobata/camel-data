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
`function camel(input: camel): camel`

type declare:(string Array or object is ok)

```js
interface ICamel {
    [key: string]: camel;
}

type allCamel = string | ICamel;

type camel = allCamel | allCamel[];
```
