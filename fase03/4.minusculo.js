function tempo(data1,data2,unidade) {
var d = new Date(data1);
var d2 = new Date(data2);
var diff = Math.abs(d2.getTime() - d.getTime())
var dias = Math.round(diff / (1000 * 60 * 60 * 24))
var mes = Math.round(diff / (1000 * 60 * 60 * 24 * 30))
var anos = Math.round(diff /(1000 * 60 * 60 * 24 * 30 * 12))

    if (unidade == "dia")
    return dias
    else if (unidade == "mês")
    return mes
    else
    return anos
    
}