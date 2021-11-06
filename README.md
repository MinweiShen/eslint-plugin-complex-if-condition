# eslint-plugin-complex-if-condition

checks whether the if condition is too complex

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-complex-if-condition`:

```sh
npm install eslint-plugin-complex-if-condition --save-dev
```

## Usage

Add `complex-if-condition` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "complex-if-condition"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "complex-if-condition/count": ["warn", 4]
    }
}
```

## Supported Rules
### count
It checks the number of binary expressions in an if condition. It accepts an optional number as the second parameter which is the maximum number of binary expressions allowed in a condition. It has a default value of 3.

