var nombre = prompt("Introduce tu nombre completo: ");

function longitud(nombre){
  let contador = 0;
  for(let i = 0; i < nombre.length; i++){
    contador++;
    if(nombre.charAt(i) == " "){
      contador--;
    }
  }
  return contador;
}

function minusculas(nombre){
  return nombre.toLowerCase();
}

function mayusculas(nombre){
  return nombre.toUpperCase();
}

function dividirNombre(nombre){
  let array = nombre.split(" ");
  let dividir = document.write("Nombre: " + array[0] + "\n" + "1er Apellido: " + array[1] + "\n" + "2ndo Apellido: " + array[2]);
  return dividir
}

document.write("Longitud de tu nombre (sin contar espacios): " + longitud(nombre));
document.write("<br>");
document.write("Nombre en minúsculas: " + minusculas(nombre));
document.write("<br>");
document.write("Nombre en mayúsculas: " + mayusculas(nombre));
document.write("<br>");
document.write("Nombre separado en líneas: ") + dividirNombre(nombre);
document.write("<br>");
