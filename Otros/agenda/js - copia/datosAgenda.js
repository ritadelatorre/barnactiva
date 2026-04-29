const datosAgenda = [];

function llenarAgenda() {
   let nuevaCategoria; 
   //CATEGORIA 0
   nuevaCategoria = new Categoria("Emergencias");
   nuevaCategoria.addContacto('Emergencias todo tipo','112','http://www.112.es/');
   nuevaCategoria.addContacto('Policía','091','http://www.policia.es/');
   // etc...
   datosAgenda.push(nuevaCategoria); //meterlo en el array principal
   
   //CATEGORIA 1
   nuevaCategoria = new Categoria("Tarjetas de Crédito (cancelación)");
   console.log("Tipo de nuevaCategoria: ", typeof(nuevaCategoria))

   
   nuevaCategoria.addContacto('Visa','900 991 124','https://www.visa.es/');
   datosAgenda.push(nuevaCategoria); //meterlo en el array principal


   return ("Agenda llena...");
}

window.onload = function () {
   console.log(llenarAgenda());
   console.log(datosAgenda);
}
