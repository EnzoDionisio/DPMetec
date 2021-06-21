var posição1
var posição2
var PosiçãoFinal

function posição1(){
 navigator.geolocation.getCurrentPosition(function(position) {
  posição1 =  position.coords.latitude
  console.log(posição1);
  document.getElementById('Altura1').value = posição1
});

}
function posição2(){
 navigator.geolocation.getCurrentPosition(function(position) {
  posição2 =  position.coords.latitude
  console.log(posição2);
  document.getElementById('Altura2').value = posição2
});
}
function conta(){
  if (posição1 > posição2) {
    document.getElementById('PosiçãoFinal').value = posição1 - posição2;
  }
  else if (posição2 > posição1) {
  document.getElementById('PosiçãoFinal').value = posição1 - posição2;
  }
  else if (posição2 = posição1) {
  document.getElementById('PosiçãoFinal').value = "Não possui diferença pois as alturas são iguais : " + posição1;
  }

}
