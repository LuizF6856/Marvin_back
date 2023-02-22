function acharNumero(num1) {
  if (num1 < 5) {
    return "mercurio";
  } else if (num1 <= 10 && num1 >= 5) {
    return "venus";
  } else if (num1 <= 100 && num1 > 10) {
    return "terra";
  } else {
    return "marte";
  }
}

console.log(acharNumero(100));

// Expected output: terra
