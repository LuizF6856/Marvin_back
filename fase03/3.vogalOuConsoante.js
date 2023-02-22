function vogalOuConsoante(letra) {
  letra_minuscula = letra.toLowerCase();

  if (
    letra_minuscula == "a" ||
    letra_minuscula == "e" ||
    letra_minuscula == "i" ||
    letra_minuscula == "o" ||
    letra_minuscula == "u"
  ) {
    return "Vogal";
  } else {
    return "Consoante";
  }
}

console.log(vogalOuConsoante("a"));

// Expected output: Vogal

console.log(vogalOuConsoante("b"));

// Expected output: Consoante
