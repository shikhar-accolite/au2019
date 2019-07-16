
var foo = {
   title: 'world',
   show() {
      str = 'hello ' + this.title;
      return ['', ''].map(function(a) { return str });
   }
};

console.log(foo.show()); // ["hello world", "hello world"]