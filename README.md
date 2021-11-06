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

This is useful because in a large team (with junior developers), you would sometimes see if conditions like:
```javascript
if (condition1 && (condition2 || condition3) && condition4) {
    doSomething()
}
```
This kind of if statements would usually grow out of control (due to the lack of code review or testing) and later developers can only keep adding new expressions. They should be refactored before reaching the unmanageable stage.

This rule helps to spot the issue at early stage.
