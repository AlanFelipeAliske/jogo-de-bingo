/*
let sorteados = [];
let valorMaximo = 5;

let adicionarSorteado = function(){
var numero = Math.round(Math.random() *10);
    for (i = 0; i < valorMaximo; i++){
        if(sorteados[i] == numero && sorteados[i] > 0){
        alert("Número já sorteado ou igual a zero!");
        return;
            }
        }
sorteados.push(numero);
console.log(sorteados);
}

var botao = document.getElementById("verificar");

var cartela = [];

for(i = 1; i <= 6; i++){
    var cartela = Math.floor(Math.random() * 20);
}
console.log(cartela);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i = 1 ; i <= 5 ; i++){
    array.push(getRandom(1,20));
}

console.log(array);

var numeros = [];

function numero_aleatorio() {
    while (numeros.length < 5) {
        var aleatorio = Math.floor(Math.random() * 20);

        if (numeros.indexOf(aleatorio) == -1)
            numeros.push(aleatorio);
    }
}
numero_aleatorio();
console.log(numeros)
*/


function gerarCartela(){
    numero_aleatorio();
    gerar();
    console.log(numeros)
}

let numeros = [];
function numero_aleatorio() {
    while (numeros.length < 5) {
        var aleatorio = Math.floor(Math.random() * 20 + 1);
        if (numeros.indexOf(aleatorio) == -1){
            numeros.push(aleatorio);
            numeros.sort((a, b) => a - b);
        }
    }
}

function gerar(){
    let lista = document.getElementById('lista');
    for(var i = 0; i < numeros.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(numeros[i]));
        lista.appendChild(item);
    }
}


function reiniciar(){
    while(numeros.length) {
        numeros.pop();
    }
    document.getElementById('lista').remove();
    console.log(numeros)
}

