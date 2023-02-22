function parOuImpar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

console.log(parOuImpar(1));

console.log(parOuImpar(2));

// Expected output:
// Impar
// Par
