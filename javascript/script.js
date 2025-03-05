const quantidaDeDeRolos = document.querySelector("#qtdederolos");
const precoTotalPacote = document.querySelector("#precopacote");
const metragemPorRolo = document.querySelector("#metrosporrolo");
const caculadoraDeBosta = document.querySelector("#caculadoraDeBosta");
const roloText = document.querySelector("#rolo");
const metragemText = document.querySelector("#metragem");
const infos = document.querySelector(".infos");
let metragemPorRoloValor;

caculadoraDeBosta.addEventListener("submit", function (e) {
  e.preventDefault();
  let quantidaDeDeRolosValor = quantidaDeDeRolos.value;
  let precoTotalPacoteValor = precoTotalPacote.value;
  metragemPorRoloValor = metragemPorRolo.value;

  if (quantidaDeDeRolosValor !== "" && precoTotalPacoteValor !== "" && metragemPorRoloValor !== "") {
    infos.classList.remove("infos");
    infos.classList.add("infos-show");
    precoporrolo(precoTotalPacoteValor, quantidaDeDeRolosValor);
  }else{
    Swal.fire("Digite um valor valido");
  }

});

function precoporrolo(precoTotalPacote, quantidadeDeRolos) {
  var soma = precoTotalPacote / quantidadeDeRolos;
  var valorarredondado = Math.ceil(soma * 100) / 100;
  roloText.innerText = valorarredondado.toFixed(2);
  precometrorolo(valorarredondado);
}

function precometrorolo(valorarredondado) {
  var soma1 = valorarredondado / metragemPorRoloValor;
  metragemText.innerText = soma1;
}

// var precoporrolo =  precoTotalPacote /quantidadeDeRolos
// var precometrorolo = precoporrolo / metragemporrolo
