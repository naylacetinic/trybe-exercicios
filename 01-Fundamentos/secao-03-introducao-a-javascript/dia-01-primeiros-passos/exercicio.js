let a = 3;
let b = 8;
let c = 20;
let num = 5;

//exibir o resultado no console: 
console.log("Adição:" + (a+b));
console.log("Subtração:" + (a-b));
console.log("Multiplicação:" + (a*b));
console.log("Divisão:" + (a/b));
console.log("Módulo:" + (a%b));

//exibir o maior de 2 números:
if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
}

//exibir o maior de 3 números:
if (a > b && a > c) {
    console.log ("O maior número é: " + a + " (a)");
} else if (b > a && b > c) {
    console.log ("O maior número é: " + b + " (b)");
} else {
    console.log ("O maior número é: " + c + " (c)");
}

//número positivo ou negativo 
if (numb > 0){
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}