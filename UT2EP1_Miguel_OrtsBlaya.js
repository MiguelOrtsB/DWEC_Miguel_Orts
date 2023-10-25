// TABLA DE MULTIPLICAR DEL 7

/* Utilizamos un bucle For con la variable "i" iniciada en 1, la cuál incrementará su valor en 1 por cada vuelta hasta
llegar a 10. A continuación, seleccionamos la primera columna dónde se ubicará la tabla del 7 con el método getElementById 
y seguidamente realizamos la operación de multiplicar 7 por i por cada vuelta de bucle para formar la tabla y mostrarla
por pantalla: */

for(i = 1; i < 11; i++){ 
  document.getElementById("tablaDelSiete").innerHTML += "<br>" + "7 x " + i + " = " + (7 * i);
  }

// TABLA DE SUMAR DEL 8

/* Utilizamos un bucle While con la variable "aux" iniciada en 1. A continuación, seleccionamos la primera columna dónde 
se ubicará la tabla del 8 con el método getElementById y seguidamente realizamos la operación de sumar 7 más i por 
cada vuelta de bucle para formar la tabla y mostrarla por pantalla. Por cada vuelta del bucle, la variable aux incrementará
en 1 siempre y cuando la condición del bucle se cumpla (<11): */

var aux = 1;
while( aux != 11){
  document.getElementById("tablaDelOcho").innerHTML += "<br>" + "8 + " + aux + " = " + (8 + aux);
  aux ++;
}

// TABLA DE DIVIDIR DEL 9

/* Utilizamos un bucle Do-While con la variable "aux2" iniciada en 1. A continuación, seleccionamos la primera columna 
dónde se ubicará la tabla del 9 con el método getElementById y seguidamente realizamos la operación de dividir 9 entre
i por cada vuelta de bucle para formar la tabla y mostrarla por pantalla. Por cada vuelta del bucle, la variable aux2 
incrementará en 1 mientras la condición del bucle se cumpla: */

var aux2 = 1;
do{
  document.getElementById("tablaDelNueve").innerHTML += "<br>" + "9 / " + aux2 + " = " + (9 / aux2);
  aux2 ++;
}while(aux2 != 11)

// DESPLAZAMIENTO DE BITS

var bin1 = 125 >> 3; // Para que muestre el resultado de 125 / 8 tenemos que desplazar 3 bits a la izquierda (/ 2^3)
var bin2 = 40 << 2; // Para que muestre el resultado de 40 x 4 tenemos que desplazar 2 bits a la derecha (* 2^2)
var bin3 = 25 >> 1; // Para que muestre el resultado de 25 / 2 tenemos que desplazar 1 bit a la izquierda (/ 2^1)
var bin4 = 10 << 4; // Para que muestre el resultado de 10 x 16 tenemos que desplazar 4 bits a la derecha (* 2^4)
// Los asignamos a su respectivas columnas y mostramos el resultado:
document.getElementById("1").innerHTML += " " + bin1; 
document.getElementById("2").innerHTML += " " + bin2;
document.getElementById("3").innerHTML += " " + bin3;
document.getElementById("4").innerHTML += " " + bin4;
