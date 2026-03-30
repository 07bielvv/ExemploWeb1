
//Declarações e variáveis
//var, let e cosnt

var nome = "Fiap";
console.log (nome)


var nome = "Teste";
console.log(nome);

if(true){
    let apelido="Fiapinho"
    console.log(apelido)
}

const taxaJuros=0.05;
console.log(taxaJuros);
// taxaJuros=1.5



var exemplo="ola dev-var";
console.log(exemplo);


let exemplo1 = "ola dev-let";
console.log(exemplo1);

const exemplo2 = "ola dev-const";

let exemplo3= 10;
console.log(exemplo3);

let exemplo4 = true;
console.log(exemplo4)

let exemplo5 = {nome1: "teste"};

console.log (exemplo5)

let exemplo6=["Java","C#","PHP"];
console.log(exemplo6)

// Valor undifined

let exemplo7;
console.log(exemplo7)


//valor vazio 
let exemplo8 = null;
console.log(exemplo8)

//  OPERADORES ARITMÉTICOS 
const valor1 = 10;
const valor2 = 20;

console.log (valor1 + valor2);
console.log (valor1 - valor2);
console.log (valor1 * valor2);
console.log (valor1 / valor2);

// OPERADORES LÓGiCOS

console.log ( valor1 < valor2);
console.log (valor1  > valor2);
console.log (valor1 > 10 || valor2 < 10)

//******************************************EXERCICIO 1 */

const p=20;
const v=10;

const precoFinal = p -v;
console.log ("O preço final com desconto é ", precoFinal )

//********************************************************
// EXERCICIO 2 
//  */

    let a= 20;
    let b = 10;

    let comparar = (a ==2 && b >=10 );
    console.log ("O resultado é:", comparar);


    // ***************************EXERCICIO 3 

    const usuariologado=20;
    const tempoToken= 10;

    const transacao = (usuariologado===20 && tempoToken >=10)
    console.log("Transação Autorizada", transacao)
    