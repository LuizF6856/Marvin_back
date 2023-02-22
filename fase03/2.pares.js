function pares(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return "Os numeros sao pares";
  } else {
    return "Os numeros nao sao pares";
  }
}

console.log(pares(2, 2));

// Expected output: Os numeros sao pares
