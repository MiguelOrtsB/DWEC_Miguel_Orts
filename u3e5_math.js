opcion = prompt("Elige una opción:\n1) Potencia\n2) Raíz\n3) Redondeo\n4) Trigonometría ");

if(opcion == 1){
base = prompt("Introduce una base");
exponente = prompt("Introduce un exponente");
resultado = Math.pow(base, exponente);
document.write("Resultado de la operación: " + resultado);  
}else if(opcion == 2){
  numero = prompt("Introduce un número NO negativo: ");

  if(numero > 0){
    resultado = Math.sqrt(numero);
    document.write("La raíz cuadrada del número introducido es: " + resultado);
  }else{
    alert("Has introducido un número negativo");
  }
}else if(opcion == 3){
  decimal = prompt("Introduce un número decimal: ");
  redondeo = Math.round(decimal);
  redondeCeil = Math.ceil(decimal);
  document.write("Resultado del redondeo con el métod 'round': " + redondeo);
  document.write("<br>");
  document.write("Resultado del redondeo con el método 'ceil': " + redondeCeil);
}else if(opcion == 4){
  angulo = prompt("Introduce un ángulo entre 0º y 360º: ");
  coseno = Math.cos(angulo);
  seno = Math.sin(angulo);
  tangente = Math.tan(angulo);
  document.write("Coseno: " + coseno);
  document.write("<br>");
  document.write("Seno: " + seno);
  document.write("<br>");
  document.write("Tangente: " + tangente);
}else{
  alert("No has introducido ninguna de las opciones");
}