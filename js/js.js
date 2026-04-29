function ocultarTodo(){
      let numeroSecciones = document.getElementsByTagName("details").length;
      
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById("modulo" + i).open = false;
	}
}

function mostrarTodo(){
      let numeroSecciones = document.getElementsByTagName("details").length;
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById("modulo" + i).open = true;
	}
}

function irA(elemento) {
      document.getElementById(elemento).open = true;
      document.getElementById(elemento).scrollIntoView();

}