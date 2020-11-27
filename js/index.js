
//  Variáveis
let numeros = [];
let numeros2 = [];
let numeros3 = [];
let numeroSorteados = [];
//var itens = lista.getElementsByTagName('li');
//let lis = 1;
var bool = false;


function gerarCartela(){
    numeroAleatorio();
    numerosGerados();
    console.log(numeros);
    console.log(numeros2);
    console.log(numeros3);
    bool = true;
    console.log(bool)

}

function numeroAleatorio() {
    while (numeros.length < 5) {
        var aleatorio = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
        if (numeros.indexOf(aleatorio) == -1){
            numeros.push(aleatorio);
            numeros.sort((a, b) => a - b);
        }
    }
    while (numeros2.length < 5) {
        var aleatorio = Math.floor(Math.random() * (40 - 21 + 1) ) + 21;
        if (numeros2.indexOf(aleatorio) == -1){
            numeros2.push(aleatorio);
            numeros2.sort((a, b) => a - b);
        }
    }
    while (numeros3.length < 5) {
        var aleatorio = Math.floor(Math.random() * (60 - 41 + 1) ) + 41;
        if (numeros3.indexOf(aleatorio) == -1){
            numeros3.push(aleatorio);
            numeros3.sort((a, b) => a - b);
        }
    }
}



function sortearNumeros(){
    if (bool == true){
        while (numeroSorteados.length < 15) {
            var aleatorio = Math.floor(Math.random() * (60 - 1 + 1) ) + 1;
            if (numeroSorteados.indexOf(aleatorio) == -1){
                numeroSorteados.push(aleatorio);
                numeroSorteados.sort((a, b) => a - b);
            }
        }
        mostrarNumeros();
    }else{
        window.alert('Primeiro você precisa Gerar a Cartela');
    }
}






/*
function sortearNumeros(){
    while (numeroSorteados.length < 15) {
        var aleatorio = Math.floor(Math.random() * (60 - 1 + 1) ) + 1;
        if (numeroSorteados.indexOf(aleatorio) == -1){
            numeroSorteados.push(aleatorio);
            numeroSorteados.sort((a, b) => a - b);
        }
    }
    mostrarNumeros();
}
*/

function reiniciar(){
    while(numeros.length) {
        numeros.pop();
    }
    while(numeros2.length) {
        numeros2.pop();
    }
    while(numeros3.length) {
        numeros3.pop();
    }
    while(numeroSorteados.length) {
        numeroSorteados.pop();
    }
    limpaCartela();
    limpaNumeroSorteado();
    bool = false;

    console.log(numeros);
    console.log(numeros2);
    console.log(numeros3);
    console.log(numeroSorteados);
    console.log(bool)

    /*for(var j = 0; j < 15; j++){
        document.getElementsByClassName('cartela')[0].remove();
    }*/

    //lista.appendChild(item).remove();
    //document.getElementById('lista').remove();
}

function numerosGerados(){
    var numero1 = document.getElementsByClassName('numero1')[0];
    numero1.innerHTML = numeros[0];
    var numero2 = document.getElementsByClassName('numero2')[0];
    numero2.innerHTML = numeros[1];
    var numero3 = document.getElementsByClassName('numero3')[0];
    numero3.innerHTML = numeros[2];
    var numero4 = document.getElementsByClassName('numero4')[0];
    numero4.innerHTML = numeros[3];
    var numero5 = document.getElementsByClassName('numero5')[0];
    numero5.innerHTML = numeros[4];
    var numero6 = document.getElementsByClassName('numero6')[0];
    numero6.innerHTML = numeros2[0];
    var numero7 = document.getElementsByClassName('numero7')[0];
    numero7.innerHTML = numeros2[1];
    var numero8 = document.getElementsByClassName('numero8')[0];
    numero8.innerHTML = numeros2[2];
    var numero9 = document.getElementsByClassName('numero9')[0];
    numero9.innerHTML = numeros2[3];
    var numero10 = document.getElementsByClassName('numero10')[0];
    numero10.innerHTML = numeros2[4];
    var numero11 = document.getElementsByClassName('numero11')[0];
    numero11.innerHTML = numeros3[0];
    var numero12 = document.getElementsByClassName('numero12')[0];
    numero12.innerHTML = numeros3[1];
    var numero13 = document.getElementsByClassName('numero13')[0];
    numero13.innerHTML = numeros3[2];
    var numero14 = document.getElementsByClassName('numero14')[0];
    numero14.innerHTML = numeros3[3];
    var numero15 = document.getElementsByClassName('numero15')[0];
    numero15.innerHTML = numeros3[4];
}

function limpaCartela(){
    var numero1 = document.getElementsByClassName('numero1')[0];
    numero1.innerHTML = '';
    var numero2 = document.getElementsByClassName('numero2')[0];
    numero2.innerHTML = '';
    var numero3 = document.getElementsByClassName('numero3')[0];
    numero3.innerHTML = '';
    var numero4 = document.getElementsByClassName('numero4')[0];
    numero4.innerHTML = '';
    var numero5 = document.getElementsByClassName('numero5')[0];
    numero5.innerHTML = '';
    var numero6 = document.getElementsByClassName('numero6')[0];
    numero6.innerHTML = '';
    var numero7 = document.getElementsByClassName('numero7')[0];
    numero7.innerHTML = '';
    var numero8 = document.getElementsByClassName('numero8')[0];
    numero8.innerHTML = '';
    var numero9 = document.getElementsByClassName('numero9')[0];
    numero9.innerHTML = '';
    var numero10 = document.getElementsByClassName('numero10')[0];
    numero10.innerHTML = '';
    var numero11 = document.getElementsByClassName('numero11')[0];
    numero11.innerHTML = '';
    var numero12 = document.getElementsByClassName('numero12')[0];
    numero12.innerHTML = '';
    var numero13 = document.getElementsByClassName('numero13')[0];
    numero13.innerHTML = '';
    var numero14 = document.getElementsByClassName('numero14')[0];
    numero14.innerHTML = '';
    var numero15 = document.getElementsByClassName('numero15')[0];
    numero15.innerHTML = '';
}

function mostrarNumeros(){
    var sorteado1 = document.getElementsByClassName('sorteado1')[0];
    sorteado1.innerHTML = numeroSorteados[0];
    var sorteado2 = document.getElementsByClassName('sorteado2')[0];
    sorteado2.innerHTML = numeroSorteados[1];
    var sorteado3 = document.getElementsByClassName('sorteado3')[0];
    sorteado3.innerHTML = numeroSorteados[2];
    var sorteado4 = document.getElementsByClassName('sorteado4')[0];
    sorteado4.innerHTML = numeroSorteados[3];
    var sorteado5 = document.getElementsByClassName('sorteado5')[0];
    sorteado5.innerHTML = numeroSorteados[4];
    var sorteado6 = document.getElementsByClassName('sorteado6')[0];
    sorteado6.innerHTML = numeroSorteados[5];
    var sorteado7 = document.getElementsByClassName('sorteado7')[0];
    sorteado7.innerHTML = numeroSorteados[6];
    var sorteado8 = document.getElementsByClassName('sorteado8')[0];
    sorteado8.innerHTML = numeroSorteados[7];
    var sorteado9 = document.getElementsByClassName('sorteado9')[0];
    sorteado9.innerHTML = numeroSorteados[8];
    var sorteado10 = document.getElementsByClassName('sorteado10')[0];
    sorteado10.innerHTML = numeroSorteados[9];
    var sorteado11 = document.getElementsByClassName('sorteado11')[0];
    sorteado11.innerHTML = numeroSorteados[10];
    var sorteado12 = document.getElementsByClassName('sorteado12')[0];
    sorteado12.innerHTML = numeroSorteados[11];
    var sorteado13 = document.getElementsByClassName('sorteado13')[0];
    sorteado13.innerHTML = numeroSorteados[12];
    var sorteado14 = document.getElementsByClassName('sorteado14')[0];
    sorteado14.innerHTML = numeroSorteados[13];
    var sorteado15 = document.getElementsByClassName('sorteado15')[0];
    sorteado15.innerHTML = numeroSorteados[14];
}

function limpaNumeroSorteado(){
    var sorteado1 = document.getElementsByClassName('sorteado1')[0];
    sorteado1.innerHTML = '';
    var sorteado2 = document.getElementsByClassName('sorteado2')[0];
    sorteado2.innerHTML = '';
    var sorteado3 = document.getElementsByClassName('sorteado3')[0];
    sorteado3.innerHTML = '';
    var sorteado4 = document.getElementsByClassName('sorteado4')[0];
    sorteado4.innerHTML = '';
    var sorteado5 = document.getElementsByClassName('sorteado5')[0];
    sorteado5.innerHTML =  '';
    var sorteado6 = document.getElementsByClassName('sorteado6')[0];
    sorteado6.innerHTML = '';
    var sorteado7 = document.getElementsByClassName('sorteado7')[0];
    sorteado7.innerHTML = '';
    var sorteado8 = document.getElementsByClassName('sorteado8')[0];
    sorteado8.innerHTML = '';
    var sorteado9 = document.getElementsByClassName('sorteado9')[0];
    sorteado9.innerHTML = '';
    var sorteado10 = document.getElementsByClassName('sorteado10')[0];
    sorteado10.innerHTML = '';
    var sorteado11 = document.getElementsByClassName('sorteado11')[0];
    sorteado11.innerHTML = '';
    var sorteado12 = document.getElementsByClassName('sorteado12')[0];
    sorteado12.innerHTML = '';
    var sorteado13 = document.getElementsByClassName('sorteado13')[0];
    sorteado13.innerHTML = '';
    var sorteado14 = document.getElementsByClassName('sorteado14')[0];
    sorteado14.innerHTML = '';
    var sorteado15 = document.getElementsByClassName('sorteado15')[0];
    sorteado15.innerHTML = '';
}





