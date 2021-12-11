function fizzbuzz(n1, n2){
    while(n1 <= n2){
if(n1%3===0 && n1%5===0){
    console.log(n1 + " FizzBuzz")  
}
else if(n1%3 === 0){
    console.log(n1 + " Fizz")
}
else if(n1%5 === 0){
    console.log(n1 + " Buzz")
}
else
    console.log(n1)
n1++
}}