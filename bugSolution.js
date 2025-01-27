function foo(a, b) {
  if (a === null || b === null) {
    return NaN; //or throw an error
  }
  return a + b;
}

console.log(foo(null, 1)); // NaN
console.log(foo(1, null)); // NaN
console.log(foo(1, 2)); // 3