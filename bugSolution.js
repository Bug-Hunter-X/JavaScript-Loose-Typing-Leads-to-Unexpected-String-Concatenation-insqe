function foo(a, b) {
  // Type checking and conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Both parameters must be numbers.';
  }

  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('a', 2)); // Output: Invalid input: Both parameters must be numbers.