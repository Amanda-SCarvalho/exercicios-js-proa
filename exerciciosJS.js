// ============================
// Exercícios com Arrays
// ============================

// Exercício 1
console.log("=== Exercício 1: Criar e Iterar sobre um Array ===");
const numeros1 = [10, 20, 30, 40, 50];
numeros1.forEach(num => console.log(num));

// Exercício 2
console.log("\n=== Exercício 2: Manipular um Array ===");
let frutas = ["maçã", "banana", "uva"];
frutas.push("laranja");
frutas.shift();
console.log(frutas);

// Exercício 3
console.log("\n=== Exercício 3: Filtragem de Array ===");
const numeros2 = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros2.filter(num => num % 2 === 0);
console.log(pares);

// Exercício 4
console.log("\n=== Exercício 4: Encontrar o Maior Valor ===");
const valores = [15, 3, 98, 23, 44];
const maior = Math.max(...valores);
console.log("Maior valor:", maior);

// Exercício 5
console.log("\n=== Exercício 5: Soma dos Elementos ===");
const numeros3 = [10, 20, 30, 40];
const soma = numeros3.reduce((acc, num) => acc + num, 0);
console.log("Soma:", soma);


// ============================
// Exercícios com Objetos
// ============================

// Exercício 6
console.log("\n=== Exercício 6: Criar e Acessar um Objeto ===");
const pessoa = { nome: "Ana", idade: 25, profissao: "Engenheira" };
console.log(pessoa.nome, pessoa.idade, pessoa.profissao);

// Exercício 7
console.log("\n=== Exercício 7: Modificar um Objeto ===");
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
carro.ano = 2025;
console.log(carro);

// Exercício 8
console.log("\n=== Exercício 8: Adicionar Propriedade ao Objeto ===");
const livro = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" };
livro.anoDePublicacao = 1954;
console.log(livro);

// Exercício 9
console.log("\n=== Exercício 9: Iterar sobre as Propriedades de um Objeto ===");
const produto = { nome: "Notebook", preco: 3500, quantidade: 5 };
for (let prop in produto) {
  console.log(prop + ": " + produto[prop]);
}

// Exercício 10
console.log("\n=== Exercício 10: Função para Exibir um Objeto ===");
const estudante = { nome: "João", idade: 21, curso: "ADS" };
function exibirEstudante(estudante) {
  console.log(`O estudante ${estudante.nome} tem ${estudante.idade} anos e está cursando ${estudante.curso}.`);
}
exibirEstudante(estudante);


// ============================
// Exercícios Combinados
// ============================

// Exercício 11
console.log("\n=== Exercício 11: Array de Objetos ===");
const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", anoDePublicacao: 1899 },
  { titulo: "1984", autor: "George Orwell", anoDePublicacao: 1949 },
  { titulo: "A Revolução dos Bichos", autor: "George Orwell", anoDePublicacao: 1945 }
];
livros.forEach(livro => console.log(livro.titulo));

// Exercício 12
console.log("\n=== Exercício 12: Atualizar Valores de Objetos em um Array ===");
let carros = [
  { marca: "Ford", modelo: "Fiesta", ano: 2018 },
  { marca: "Chevrolet", modelo: "Onix", ano: 2019 },
  { marca: "Honda", modelo: "Civic", ano: 2020 }
];
carros.forEach(carro => carro.ano = 2025);
console.log(carros);

// Exercício 13
console.log("\n=== Exercício 13: Encontrar um Objeto em um Array ===");
const pessoas = [
  { nome: "Maria", idade: 25, cidade: "São Paulo" },
  { nome: "Pedro", idade: 35, cidade: "Rio de Janeiro" },
  { nome: "Ana", idade: 28, cidade: "Belo Horizonte" }
];
const pessoaMaior30 = pessoas.find(p => p.idade > 30);
console.log("Pessoa com mais de 30 anos:", pessoaMaior30.nome);
