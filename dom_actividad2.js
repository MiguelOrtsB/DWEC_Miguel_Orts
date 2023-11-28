// Con esta función simplemente crearemos una tabla de 100x100 para mostrarla por pantalla sin colores
function crearTabla() {
  // Obtenemos la tabla HTML que queremos rellenar a través de su ID
  let table = document.getElementById("test");
  // Inciamos variable que nos servirá para incrementar el valor de cada celda en 1 por cada interación del bucle For
  let y = 0;
  // Bucle For anidado (dos dimensiones) para rellenar las filas (variable "i") y celdas (variable "j") de la tabla
  for (let i = 1; i <= 10; i++) {
    // Creamos el elemento <tr> que serán las filas de la tabla en la primera iteración del bucle
    let row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      // Creamos el elemento <td> que serán las celdas de la fila en la segunda iteración del bucle
      let cell = document.createElement("td");
      /* Como el valor de "y" se inicializa en 0 la primera vuelta de bucle rellenará hasta el 10 (0 + j), en la siguiente vuelta 
      aumentará su valor en 10 (como se puede observar más abajo) y imprimirá a partir del 11 (10 + j) en la siguiente fila */
      let valor = y + j;
      // Asignamos a cada celda su respectivo valor
      cell.innerHTML = valor;
      // Cuando j sea 10, incrementamos y en 10 para lo citado anteriormente
      if (j == 10) {
        y += 10;
      }
      // Asignamos el elemente hijo (celdas o <td>) a las filas
      row.appendChild(cell);
    }
    // Asignamos el elemento hijo (filas o <tr>) a la tabla
    table.appendChild(row);
  }
}

// LLamamos a la función para activarla
crearTabla();

// Con esta función crearemos una tabla de 100x100 pero esta vez con los colores de los números primos
function casiPrimos() {
  /* Una vez que hayamos hecho click en el botón para activar la función, se desactiva para que no se pueda clickar de nuevo
  y así mostrar nuevas tablas */
  let myButton = document.getElementById("my-button");
  myButton.setAttribute("disabled", "");
  // Obtenemos la segunda tabla HTML que queremos rellenar con los colores a través de su ID
  let table = document.getElementById("test2");
  let y = 0;
  for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      let cell = document.createElement("td");
      let valor = y + j;
      cell.innerHTML = valor;

      // Esta es la parte diferente respecto a la función anterior. Iniciamos contador en 0
      let contador = 0;
      // Bucle For que recorrera todos los números desde 0 hasta el valor de la celda en este momento para así poder dividirlos
      for(let m = 0; m <= valor; m++){
        // Si la división del valor entre un número da 0, es que la división es divisible y por tanto aumentamos contador
        if (valor % m == 0){
          console.log(`El número ${valor} es divisible entre ${m}`);
          contador++;
        }
      }
      // Si al salir del bucle el contador es 3, cumple los requisitos y por tanto es un número primo
      if(contador == 3){
      // Añadimos atributo a esa celda, que hará que cambie de color de fondo a amarillo. Gracias al CSS adjunto en el HTML
      cell.classList.add("casi-primo");
      }

      if (j == 10){
        y += 10;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  
}


