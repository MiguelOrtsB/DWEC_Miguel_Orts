var numero = parseInt(prompt("Introduce un número: "));

function exponencial(numero){
  return numero.toExponential();
}

function redondear(numero){
  return numero.toFixed(4);
}

function binario(numero){
  return numero.toString(2);
}

function octal(numero){
  return numero.toString(8);
}

function hexadecimal(numero){
  return numero.toString(16);
}

document.write("Número exponencial: " + exponencial(numero));
document.write("<br>");
document.write("Número con 4 decimales: " + redondear(numero));
document.write("<br>");
document.write("Número en binario: " + binario(numero));
document.write("<br>");
document.write("Número en octal: " + octal(numero));
document.write("<br>");
document.write("Número en hexadecimal: " + hexadecimal(numero));