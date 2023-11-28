function crearCheckboxs() {
  let myButton = document.getElementById("my-button");
  myButton.setAttribute("disabled", "");
  for(let i = 1; i < 101; i++){
    let valorAleatorio = Math.floor(Math.random()*100);
		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "checkbox";
		checkbox.value = valorAleatorio;
		checkbox.id = i;
		// Al lado del checkbox tenemos un label con el mismo valor aleatorio
		let label = document.createElement('label');
		label.appendChild(document.createTextNode(valorAleatorio));
		// Anexamos checkbox y label al body
		document.body.appendChild(checkbox);
		document.body.appendChild(label);
  }
} 

function marcarTodos() {
    let all = document.getElementsByName("checkbox")
    all.forEach(item => item.checked = true)
}

function desmarcarTodos(){
  let all = document.getElementsByName("checkbox")
  all.forEach(item => item.checked = false)
}