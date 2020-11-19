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
*/

function gerarCartela(){
    
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i = 1 ; i <= 5 ; i++){
    array.push(getRandom(0,20));
}

console.log(array);

for(let i = 0 ; i < 5 ; i++){
    var novaArray = array.filter((este, i) => array.indexOf(este) === i);
}


console.log(novaArray);