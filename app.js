// 1
function ex1() {
    let n = Number(document.getElementById("num1").value);
    let res = "";
    if (n > 0) res = "Número Positivo";
    else if (n < 0) res = "Número Negativo";
    else res = "Número Neutro";
    document.getElementById("res1").innerText = res;
}

// 2
function ex2() {
    let idade = Number(document.getElementById("idade").value);
    let res = idade >= 18 ? "Maior de idade" : "Menor de idade";
    document.getElementById("res2").innerText = res;
}

// 3
function ex3() {
    let nums = [];
    for (let i = 1; i <= 10; i++) nums.push(i);
    document.getElementById("res3").innerText = nums.join(", ");
}

// 4
function ex4() {
    let n = Number(document.getElementById("numTabuada").value);
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${n} x ${i} = ${n * i}\n`;
    }
    document.getElementById("res4").innerText = res;
}

// 5
function ex5() {
    let nums = [];
    let i = 10;
    while (i >= 1) {
        nums.push(i);
        i--;
    }
    document.getElementById("res5").innerText = nums.join(", ");
}

// 6
function ex6() {
    let senha = document.getElementById("senha").value;
    document.getElementById("res6").innerText =
        senha === "1234" ? "Acesso permitido!" : "Senha incorreta!";
}

// 7
function ex7() {
    function somar(a, b) {
        return a + b;
    }
    let n1 = Number(document.getElementById("soma1").value);
    let n2 = Number(document.getElementById("soma2").value);
    document.getElementById("res7").innerText = "Resultado: " + somar(n1, n2);
}

// 8
const ehPar = (n) => n % 2 === 0;

function ex8() {
    let n = Number(document.getElementById("numPar").value);
    document.getElementById("res8").innerText = ehPar(n) ? "É par" : "É ímpar";
}

// 9
function somarAte(limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) soma += i;
    return soma;
}

function ex9() {
    let n = Number(document.getElementById("numLimite").value);
    document.getElementById("res9").innerText = "Soma: " + somarAte(n);
}

// 10
function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function ex10() {
    let n = Number(document.getElementById("numPrimo").value);
    document.getElementById("res10").innerText = ehPrimo(n) ? "É primo" : "Não é primo";
}