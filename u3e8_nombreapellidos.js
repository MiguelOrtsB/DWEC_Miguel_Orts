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
  return dividir;
}

function nombreUsuario(nombre){
  let array = nombre.split(" ");
  let nombre1 = array[0];
  let apellido1 = array[1];
  let apellido2 = array[2];
  let propuestaNombre1 = nombre1.charAt(0) + apellido1 + apellido2.charAt(0);
  return propuestaNombre1;
}

function nombreUsuario2(nombre){
  let array = nombre.split(" ");
  let nombre1 = array[0];
  let apellido1 = array[1];
  let apellido2 = array[2];
  let propuestaNombre2 = nombre1.substring(0,3) + apellido1.substring(0,3) + apellido2.substring(0,3);
  return propuestaNombre2;
}

document.write("Longitud de tu nombre (sin contar espacios): " + longitud(nombre));
document.write("<br>");
document.write("Nombre en minúsculas: " + minusculas(nombre));
document.write("<br>");
document.write("Nombre en mayúsculas: " + mayusculas(nombre));
document.write("<br>");
document.write("Nombre separado en líneas: ") + dividirNombre(nombre);
document.write("<br>");
document.write("Propuesta de nombre de usuario: " + nombreUsuario(nombre));
document.write("<br>");
document.write("Propuesta de nombre de usuario 2: " + nombreUsuario2(nombre));