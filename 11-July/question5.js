function foo() {
    'use strict';
    (function () {
      var point = {x: 42, y: 27};
      with (point) {
        console.log('The coordinates are: x: ', x, 'y: ', y);
      }
    })();
  }

foo();

// Ans := Strict mode code can not include a with statement.