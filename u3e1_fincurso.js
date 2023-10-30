var hoy = new Date('Oct 30 2023');
var finalCurso = new Date("06/21/2024");

var faltanXMeses = (12 - hoy.getMonth()) + (finalCurso.getMonth() + 1); // Da 9. Que son los meses que faltan hasta Junio

// Creamos unas variables que almacenarás la cantidad de dias que faltan desde hoy hasta junio

var cantidadDias = 0;
var cantidadDias2 = 0;
var cantidadTotalDias = 0;

/* Para poder calcular los días que tienen cada mes desde el mes actual hasta junio, creamos un bucle For donde la variable 
i se inicia en la cantidad de meses que faltan (faltanXMeses=9), el bucle se repetirá hasta que i sea menor a 
faltanXMeses*2(18) para que de 9 vueltas de bucle que es lo que necesitamos por cada mes que falta hasta junio. */

for(var i = faltanXMeses; i < faltanXMeses*2; i++){
  
  /* Hago un condicional para que cuando i sea de 9 a 11 (los meses que faltan para terminar 2023) me calcule los días de
  octubre, noviembre y diciembre y que, cuando llegue a Enero (12), cambie de año por sí mismo (2024). No hay que 
  despistarse, ya que un getDate() de 18 por ejemplo, te calcula el respectivo mes pero simplemente cambiando de año. 
  Ya que los meses en Date van del 0 al 11 (2023), el 18 sería Julio del 2024 */

  if(i >= 12){ // Si i es igual o mayor a 12, cambia de año (al 2024) y empieza a calcular desde Enero los días que tiene.
    let dias2 = new Date(2023,(i + 1),0); /* Calculamos el mes + 1 para que te calcule los días del mes anterior. Como 12
    calcularía realmente Diciembre, añadimos 1 para que nos calcule Enero (13) que es lo que queremos */
    document.write(dias2.getDate());
    document.write("<br>");
    cantidadDias2 += dias2.getDate(); // Añadimos la cantidad de dias de los meses de 2024 a una variable
  }else{ // Si i es menor a 12 (9 por ejemplo, que sería el primer valor en la primera vuelta de bucle)
    let dias = new Date(2023,(i + 1),0); // Calculamos los días del mes 9 + 1 (para que así nos calcule los de Octubre)
    document.write(dias.getDate());
    document.write("<br>");
    cantidadDias += dias.getDate(); // Añadimos la cantidad de dias de los meses de 2023 a una variable
  }
}

cantidadTotalDias = cantidadDias + cantidadDias2; // Sumamos la cantidad de dias de los meses de 2023 y 2024

var octubre = hoy.getDate(); // Sacamos de Octubre los días que tenemos que restar simplemente calculando el día actual
var junio = 30 - finalCurso.getDate(); // Sacamos de Junio los días que tenemos que restar (restando 30 - 21 que es el final)
var restarDias = octubre + junio; // Sumamos el resultado de las dos anteriores
document.write("Quedan " + (cantidadTotalDias - restarDias) + " días para el final de curso"); // Al cantidad total le restamos lo anterior


// document.write("<br>");
// const data = new Date(2023,14,0); Esto realmente sería el Febrero de 2024
// document.write(data.getDate());
/* con esto sacamos los días que tiene cada mes, ya que al calcular el día 0 se refiere
 al día anterior al 1, y por lo tanto es el último día del mes anterior al mes que hemos puesto */

