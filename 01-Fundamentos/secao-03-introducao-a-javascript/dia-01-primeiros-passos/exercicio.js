let a = 3;
let b = 8;
let c = 20;
let num = 5;
let angA = 90;
let angB = 45;
let angC = 45;
let somaAng = angA + angB + angC;
let angPositivos = angA > 0 && angB > 0 && angC > 0;


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
if (num > 0){
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//é ou não um triângulo pelos ângulos internos
if (angPositivos){
    if (somaAng === 180) {
        console.log(true);
      } else {
        console.log(false);
      }
} else {
    console.log('Erro: ângulo inválido!');
}

//peças de xadres o que cada uma pode fazer
let peca = "";
switch(peca.toLocaleLowerCase()) {
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
}