var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B ', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = prompt('Introduce tu número de DNI (sin letra): ');
var letra = prompt('Introduce la letra de tu DNI (en mayúsculas): ')

if (dni < 0 || dni > 99999999) 
alert( '¡El número de DNI es incorrecto!' );

if (letra.length > 1)
alert('¡Error! Has introducido más de una letra')

var comprobarminusculas = lletres.indexOf(letra)
if (comprobarminusculas == -1)
alert('¡Error! Has introducido la letra en minúscula')

var resto = dni%23;

if (lletres[resto] == letra){
  document.write('Tu letra es la ' + lletres[resto]);
}else{
  document.write('Tu letra no coincide')
}
