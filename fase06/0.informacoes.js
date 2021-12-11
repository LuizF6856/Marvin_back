function informacoes(obj, prop){
    
    var array = Object.keys(obj)
    var result = Object.values(obj)
    
    var i = 0;
    while (i <= array.length){
        if (prop === array[i]){
            return result[i]
        }
        i++;
    }
return false
}
