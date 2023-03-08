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
    if (num > 0){
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }

//é ou não um triângulo pelos ângulos internos
    let angA = 90;
    let angB = 45;
    let angC = 45;
    let somaAng = angA + angB + angC;
    let angPositivos = angA > 0 && angB > 0 && angC > 0;
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

//transformar porcentagem em nota 
    let nota = 100;
    if (nota >= 90 && nota <= 100) {
        console.log("A");
    } else if (nota >= 80 && nota <= 90) {
        console.log("B");
    } else if (nota >= 70 && nota <= 80) {
        console.log("C");
    } else if (nota >= 60 && nota <= 70) {
        console.log("D");
    } else if (nota >= 50 && nota <= 60) {
        console.log("E");
    } else if (nota < 50) {
        console.log("F");
    } else {
        console.log("Erro, nota incorreta!");
    }

//defina true se pelo menos 1 for par
    let numA = 2;
    let numB = 7;
    let numC = 9;
    let vdd = false;
    if ((numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0)) {
        vdd = true;
    };
    console.log(vdd);

//defina true se pelo menos 1 for ímpar
    let nVdd = false;
    if ((numA % 2 === 1 || numB % 2 === 1 || numC % 2 === 1)) {
        nVdd = true;
    };
    console.log(nVdd);

//calcular o lucro
    let custo = 1;
    let valor = 3;
    if (custo >= 0 && valor >= 0) {
    let totalCusto = custo * 1.2;
    let total = (valor - totalCusto) * 1000;
    console.log(total);
    } else {
    console.log("Error, os valores não podem ser negativos!");
    }

//calcular salário líquido pelo salário bruto
    let liqINSS;
    let liqIR;
    let salarioBruto = 2000.00;
    if (salarioBruto <= 1556.94) {
        liqINSS = salarioBruto * 0.08;
    } else if (salarioBruto <= 2594.92) {
        liqINSS = salarioBruto * 0.09;
    } else if (salarioBruto <= 5189.82) {
        liqINSS = salarioBruto * 0.11;
    } else {
        liqINSS = 570.88;
    }
    let baseSalarial = salarioBruto - liqINSS;
    if (baseSalarial <= 1903.98) {
        liqIR = 0;
    } else if (baseSalarial <= 2826.65) {
        liqIR = (baseSalarial * 0.075) - 142.80;
    } else if (baseSalarial <= 3751.05) {
        liqIR = (baseSalarial * 0.15) - 354.80;
    } else if (baseSalarial <= 4664.68) {
        liqIR = (baseSalarial * 0.225) - 636.13;
    } else {
        liqIR = (baseSalarial * 0.275) - 869.36;
    };
    console.log("Salário: " + (baseSalarial - liqIR));