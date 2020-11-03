var sorteados = [];
var valorMaximo = 2;
var adicionarSorteado = function(){


var numero = Math.round(Math.random() *10);
    for (var i = 0; i < valorMaximo; i++){
        if(sorteados[i] == numero && sorteados[i] > 0){
        alert("Número já sorteado ou igual a zero!");
        return;
            }
        }
sorteados.push(numero);
console.log(sorteados);

}

var botao = document.getElementById("verificar");