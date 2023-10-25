// TABLA DE MULTIPLICAR DEL 7

/* Utilizamos un bucle For con la variable "i" iniciada en 1 la cuál incrementará su valor en 1 por cada vuelta hasta
llegar a 10. A continuación, seleccionamos la primera columna dónde se ubicará la tabla del 7 con el método getElementById 
y seguidamente realizamos la operación de multiplicar 7 por i por cada vuelta de bucle para formar la tabla y mostrarla
por pantalla */

for(i = 1; i < 11; i++){ 
  document.getElementById("tablaDelSiete").innerHTML += "<br>" + "7 x " + i + " = " + (7 * i);
  }

// TABLA DE SUMAR DEL 8

/* Utilizamos un bucle While con la variable "aux" iniciada en 1. A continuación, seleccionamos la primera columna dónde 
se ubicará la tabla del 8 con el método getElementById y seguidamente realizamos la operación de sumar 7 más i por 
cada vuelta de bucle para formar la tabla y mostrarla por pantalla. Por cada vuelta del bucle, la variable aux incrementará
en 1 */

var aux = 1;
while( aux != 11){
  document.getElementById("tablaDelOcho").innerHTML += "<br>" + "8 + " + aux + " = " + (8 + aux);
  aux ++;
}

// TABLA DE DIVIDIR DEL 9

/* Utilizamos un bucle Do-While con la variable "aux2" iniciada en 1. A continuación, seleccionamos la primera columna 
dónde se ubicará la tabla del 9 con el método getElementById y seguidamente realizamos la operación de dividir 9 entre
i por cada vuelta de bucle para formar la tabla y mostrarla por pantalla. Por cada vuelta del bucle, la variable aux2 
incrementará en 1 */

var aux2 = 1;
do{
  document.getElementById("tablaDelNueve").innerHTML += "<br>" + "9 / " + aux2 + " = " + (9 / aux2);
  aux2 ++;
}while(aux2 != 11)

// 125 / 8

//j

/* */
