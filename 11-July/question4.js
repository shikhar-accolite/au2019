var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }

var fun = module.getX.bind(module);
console.log( fun() );