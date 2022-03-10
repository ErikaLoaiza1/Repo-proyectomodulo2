
	let lista = document.getElementById("lista"),
		aggTarea = document.getElementById("aggTarea"),
		btnAgregar = document.getElementById("btnAgg");

	function agregarTarea (){
		let tarea = aggTarea.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			aggTarea.setAttribute("placeholder", "Agrega una tarea valida");
			aggTarea.className = "error";
			return false;
		}

		
		enlace.appendChild(contenido);
	
		enlace.setAttribute("href", "#");
		
		nuevaTarea.appendChild(enlace);
		
		lista.appendChild(nuevaTarea);

		aggTarea.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	function comprobarInput (){
		aggTarea.className = "";
		aggTarea.setAttribute("placeholder", "Agrega tu tarea");
	};

	function eliminarTarea (){
		this.parentNode.removeChild(this);
	};


	aggTarea.addEventListener("click", comprobarInput);


	btnAgregar.addEventListener("click", agregarTarea);
 

	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}


