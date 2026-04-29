const ordenadores = [];

let ordenador; 
ordenador = new Ordinador("HP", "XXX", "i7", "256", "1tb");
ordenadores.push(ordenador)
ordenador = new Ordinador("marca", "model", "procesador", "ram", "disco");
ordenadores.push(ordenador)

function crearOrdinadors() {
   let marca, model, procesador, ram, disco, ordenador;

   for (let i = 1; i<=2; i++) {
      marca = prompt("Indica la marca del Ordenador " + i);
      model = prompt("Indica el model del Ordenador " + i);
      procesador= prompt("Indica el procesador del Ordenador " + i);
      ram = prompt("Indica la cantidad de memoria RAM del Ordenador " + i); 
      disco = prompt("Indica la capacidad del disco duro del Ordenador " + i);

      ordenador = new Ordinador(marca, model, procesador, ram, disco);
      ordenadores.push(ordenador)
   }
}

   function consultarOrdinador() {
      let numero=0;
      do {
         numero = prompt("¿Qué ordenador quieres consultar? (1 o 2)");
      } while(numero<1 ||numero >2);
      let ordenador = ordenadores[numero-1];
      document.getElementById("num").value = numero;
      document.getElementById("marca").value = ordenador.getMarca();
      document.getElementById("modelo").value = ordenador.getModel();
      document.getElementById("procesador").value = ordenador.getProcesador();
      document.getElementById("ram").value = ordenador.getRam();
      document.getElementById("disco").value = ordenador.getDisco();
      document.getElementById("consultar").style.display="block";
   }

   function cambiaProcesador() {
      let num = parseInt(document.getElementById("num").value);
      num--;
      console.log(num); 
      let nuevoProcesador = prompt("Indica el nuevo procesador");
      ordenadores[num].setProcesador(nuevoProcesador);
      document.getElementById("procesador").value = ordenadores[num].getProcesador();
   }

   function consultarOrdinador2() {
      let numero=0;
      do {
         numero = prompt("¿Qué ordenador quieres consultar? (1 o 2)");
      } while(numero<1 ||numero >2);
      alert(ordenadores[numero-1]);
   }
      