function encontrarNumeroMasGrande(matriz){
  return Math.max.apply(null, matriz);
}

function calcularMedia(matriz){
  let suma = 0;
  let media = 0;
  for(let i = 0; i < matriz.length; i++){
    suma += matriz[i];
    media = suma / matriz.length;
  }
  return media;
}

const numeros = [10,5,8,20,3,15];
console.log("El número más grande es: " + encontrarNumeroMasGrande(numeros));
console.log("La media es: " + calcularMedia(numeros)); 