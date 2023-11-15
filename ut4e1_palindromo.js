function esPalindromo(word){
  
  // Pasamos la palabra a minúsculas
  let palabra = word.toLowerCase();
  
  // Separamos la palabra letra por letra en un Array
  let array1 = palabra.split("");

  // Le damos la vuelta
  let reversed = array1.reverse();
  
  // La volvemos a unir
  let union = reversed.join("");
  
  // Comprobamos si son iguales
  if(palabra == union){
    return true;
  }else{
    return false;
  }
}

// Pedimos al usuario que introduzca un texto
var texto = prompt("Introduce un texto");

// Recogemos ese texto y llamamos a la función con ese texto como parámetro
document.write(esPalindromo(texto));