function tempo(primeira_data, segunda_data, unidade) {
  var data_1 = new Date(primeira_data);
  var data_2 = new Date(segunda_data);

  var diferenca = Math.abs(data_2.getTime() - data_1.getTime());

  var dias = Math.round(diferenca / (1000 * 60 * 60 * 24));
  var mes = Math.round(diferenca / (1000 * 60 * 60 * 24 * 30));
  var anos = Math.round(diferenca / (1000 * 60 * 60 * 24 * 30 * 12));

  if (unidade == "dia") {
    return dias;
  } else if (unidade == "mes") {
    return mes;
  } else {
    return anos;
  }
}

console.log(tempo("2002/07/23", "2003/07/23", "mes"));

// Expected output: 12
