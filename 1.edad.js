var edad = prompt('Introduce tu edad: ');

if (edad < 0) {
  alert( '¡Error! No puedes introducir una edad menor a 0' );
} else if (edad > 0 && edad <= 12){
  document.write('Niño');
} else if (edad > 12 && edad <= 26){
  document.write('Jóven');
} else if (edad > 26 && edad <= 60){
  document.write('Adulto');
} else {
  document.write('Jubilado');
}