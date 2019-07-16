function foo() {
    var a = 42;
    (function() {
      a = 27;
      console.log(a);
    })();
    console.log(a);
  }
  
foo();