function minusculo(palavra) {
    var primeira_letra_em_minusculo = palavra.substring(0, 1).toLowerCase()
    var restante_em_maiusculo = palavra.substring(1).toUpperCase()

    return primeira_letra_em_minusculo.concat(restante_em_maiusculo)
}

console.log(minusculo("Felipe"))

// Expected output: fELIPE
