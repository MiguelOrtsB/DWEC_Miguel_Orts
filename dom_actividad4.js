function desaparecer(elemento){
  document.getElementById(elemento).hidden = true;
}

function eliminar(elemento){
  document.getElementById(elemento).remove();
}

function volverAMostrar(){
  let all = document.getElementsByName("p")
  all.forEach(item => item.hidden = false);
}