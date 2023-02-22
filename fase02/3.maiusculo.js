function maiusculo(palavra) {
    var iniciais_em_maisculo = palavra.substring(0, 3).toUpperCase();
    return iniciais_em_maisculo.concat(palavra.substring(3));
}

console.log(maiusculo("felipe"))

// Expected output: FELipe
