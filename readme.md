# class-ancestors

A [Node.js](https://nodejs.org/) module which returns an array containing the ancestors of a given class.

## Installation

```bash
npm install class-ancestors --save
```

## Usage

```javascript
const getClassAncestors = require('class-ancestors')

class A {}
class B extends A {}
class C extends B {}

getClassAncestors(C) // [B, A]
getClassAncestors.names(C) // ['B', 'A']
```
