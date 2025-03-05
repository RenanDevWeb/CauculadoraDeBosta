const quantidadeDeRolos = document.querySelector("#qtdederolos");
const precototalpacote = document.querySelector("#precopacote");
const metragemporrolo = document.querySelector("#metrosporrolo");
const caculadoraDeBosta = document.querySelector("#caculadoraDeBosta");
const roloText =   document.querySelector("#rolo")
const metragemText  =  document.querySelector("#metragem")
let metragemporroloValor;

caculadoraDeBosta.addEventListener("submit", function (e) {
    e.preventDefault()
    let quantidadeDeRolosValor = quantidadeDeRolos.value
    let precototalpacoteValor  =  precototalpacote.value
    metragemporroloValor =  metragemporrolo.value
    precoporrolo(precototalpacoteValor,quantidadeDeRolosValor)
    

});

function precoporrolo(precototalpacote,quantidadeDeRolos) {
  var soma = precototalpacote / quantidadeDeRolos;
  var valorarredondado = Math.ceil(soma * 100) / 100
  roloText.innerText = valorarredondado.toFixed(2)
  precometrorolo(valorarredondado)
}

function precometrorolo(valorarredondado) {
  var soma1 = valorarredondado / metragemporroloValor;
  metragemText.innerText = soma1
}

// var precoporrolo =  precototalpacote /quantidadeDeRolos
// var precometrorolo = precoporrolo / metragemporrolo
