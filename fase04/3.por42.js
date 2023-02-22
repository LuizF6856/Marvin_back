function por42(n1, n2) {
  let cont = 0;

  while (n1 <= n2) {
    if (n1 % 42 === 0) {
      cont++;
      if (cont === 2) {
        return n1;
      }
    }
    n1++;
  }

  if (cont === 0 || cont === 1) {
    console.log("Nao encontrado");
    return false;
  }
}

console.log(por42(0, 42));

// Expected output: 42
