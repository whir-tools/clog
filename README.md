clog
====

Simple wrapper around console.log which prepends a duration at the start.

```javascript

var clog = require('whir-clog');

clog('hi'); // 0.022s - hi

// can bind it just like console log too

var boundClog = clog.bind(null, 'other');
boundClog('thing'); // 0.032s - other thing

```
