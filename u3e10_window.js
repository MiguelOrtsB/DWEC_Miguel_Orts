let myWindow;

function abrirVentana(){
  let confirmacion = confirm("¿Estás de acuerdo?");
  if(confirmacion == true){
    myWindow = window.open("u3e10_window2.html", "Nueva ventana", "width=200, height=80, resizable=0, scrollbars=0, toolbar=0, location=0, left=500, top=500");
  }
}

function cerrarVentana(){
  myWindow.close();
}

function moverVentana(){
  myWindow.moveBy(10,10);
}
  