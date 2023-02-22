function fizzBuzz(n1, n2) {
  while (n1 <= n2) {
    if (n1 % 3 === 0 && n1 % 5 === 0) {
      console.log(n1 + " FizzBuzz");
    } else if (n1 % 3 === 0) {
      console.log(n1 + " Fizz");
    } else if (n1 % 5 === 0) {
      console.log(n1 + " Buzz");
    } else console.log(n1);
    n1++;
  }
}

fizzBuzz(0, 5);
// Expected output:
// 0 FizzBuzz
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
