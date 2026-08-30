//exercicios Italo 29.08

// 1) Declare uma constante para armazenar o valor original de um produto (ex: 250) e outra constante para a porcentagem de desconto (ex: 15). Crie uma variável para calcular e armazenar o valor final do produto com o desconto aplicado. Mostre o resultado no console com uma mensagem descritiva.

const produto = 250;
const desconto = produto * (15 / 100); // 15% de desconto.
let valorFinal = produto - desconto
console.log(valorFinal)


// 2) Crie um algoritmo que declare uma constante com uma temperatura em graus Celsius. Em seguida, utilize a fórmula matemática padrão para calcular a temperatura correspondente em Fahrenheit e armazene-a em uma nova variável, exibindo o resultado.

const tempCelsius = 30;
const tempFahrenheit = (tempCelsius * 1.8) + 32
console.log(tempCelsius + "ºC" + " é " + tempFahrenheit + "ºF")

// 3) Declare constantes para três notas de avaliações e seus respectivos pesos (peso 2, peso 3 e peso 5). Calcule a média ponderada final das notas, guarde em uma variável e exiba o resultado.

const n1 = 10
const n2 = 8.5
const n3 = 6

const p1 = 2
const p2 = 3
const p3 = 5

const media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3)

console.log(media.toFixed(1))

// 4) Crie uma variável para armazenar o salário atual de um funcionário. Utilizando uma estrutura condicional, se o salário for menor que 2000, aplique um aumento de 15%; caso contrário, aplique um aumento de 10%. Atualize a mesma variável com o novo salário e exiba o valor final.

let salario = 1900;

if (salario < 2000) {
    salario = salario * 1.15
}
else {
    salario = salario * 1.10
}

console.log(salario)


// 5) Desenvolva uma função que receba dois parâmetros: o peso em quilogramas e a altura em metros. A função deve calcular o IMC (peso dividido pela altura ao quadrado) e retornar uma frase contendo o valor do IMC calculado e se o resultado é 'Abaixo do peso' (IMC menor que 18.5), 'Peso normal' (entre 18.5 e 24.9) ou 'Sobrepeso' (25 ou superior).

let peso = 50; //em kilogramas
let altura = 1.82; //em metros

let imc = peso / (altura ** 2);

console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('abaixo do peso')
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log('peso normal')
}
else {
    console.log('sobrepeso')
}

// 6) Crie uma função para exibir uma mensagem de boas-vindas. Ela deve aceitar dois parâmetros: o nome do usuário e o idioma de
// preferência. Defina o idioma padrão como português. Se o idioma for português retorne 'Olá, [nome]!', se for inglês retorne 'Hello, [nome]!', e se for espanhol retorne '¡Hola, [nome]!'.

function boasVindas(nome, idioma) {
    if (idioma === "portugues") {
        return `Olá, ${nome}!`;
    }
    else if (idioma === "ingles") {
        return `Hello, ${nome}`
    }
    else {
        return `¡Hola, ${nome}`
    }
}

boasVindas("silas", "ingles")
console.log(boasVindas("silas", "espanhol"))
/*

7) Escreva um algoritmo que retorne o valor de 4 produtos que são: Arroz, Feijão, Carne e Macarrão e informe se este valor é acima da média nacional ou não.
Média Nacional é:

Arroz: R$ 9,00
Feijão: R$ 12, 00
Carne: R$ 30,00 KG
Macarrão:
8$ 5,00

OBS: Considere a média nacional com preços entre 6 e 28 reais.

*/

// 8) •Sabendo que o lucro anual de uma empresa é, tipicamente, 23% do total de vendas, crie um algoritmo que solicite ao usuário que entre com o valor projetado do total de vendas e, em seguida, calcule e exiba o lucro que deve ser obtido com esse valor. Lembrete: 23% = 23\100 = 0,23.

/*

9) •Um acre de terra é equivalente a 4.046,86 m2, a 43.560 ft2 (pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite ao usuário que informe a área de um terreno em metros quadrados e mostre as áreas correspondentes em acres,
pés quadrados e hectares.
•1 = 4.046,86 m2
•1= 43.560 ft2
•1= 0,404686 hectares

*/

// 10) Ler três notas de um aluno, calcular a média e informar se ele foi aprovado (Média ≥ 7), reprovado (Média < 7) ou aprovado com louvor (Média = 10) e diga o nome e a turma do aluno.

