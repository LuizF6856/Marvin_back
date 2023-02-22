function adicionar(arr, arg1, arg2) {
  arr.push(arg1, arg2);

  return arr;
}

console.log(adicionar([], "a", "b"));

// Expected output: [ 'a', 'b' ]
