function informacoes(obj, prop) {
  var indice = Object.keys(obj);
  var valor = Object.values(obj);

  var i = 0;
  while (i <= indice.length) {
    if (prop === indice[i]) {
      return valor[i];
    }
    i++;
  }
  return false;
}

console.log(informacoes(["0", "1", "2", "3", "4"], "3"));

// Expected output: 3

console.log(informacoes(["0", "1", "2", "3", "4"], "5"));

// Expected output: false
