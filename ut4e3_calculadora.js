function calcularResultado(word){
  let int = parseInt(word);
  let evaluar = eval(word);
  if(!isNaN(evaluar)){
    return evaluar;
  }else{
    return "Error de expresión";
  }
  
}

console.log(calcularResultado('5 + 3')); // Hauria de mostrar 8
console.log(calcularResultado('10 * 2')); // Hauria de mostrar 20
console.log(calcularResultado('Math.sqrt(9)')); // Hauria de mostrar 3 (avalua funcions matemàtiques)
console.log(calcularResultado('Hola')); // Hauria de mostrar 'Error d'expressió' (no és un número ni una expressió vàlida)