class Ordinador {
   constructor(marca, model, procesador, ram, disco) {
      this.marca = marca;
      this.model = model;
      this.procesador = procesador;
      this.ram = ram; 
      this.disco = disco;
   }

   getMarca() {return this.marca;}
   getModel(){return this.model;}
   getProcesador(){return this.procesador}
   getRam() {return this.ram}
   getDisco(){ return this.disco} 

   setProcesador(procesador){this.procesador = procesador;}
   setRam(ram) {this.ram = ram;}
   setDisco(disco){this.disco = disco;} 

   ejecutarPrograma(programa) {
      return "En aquests moments s'està executant:" + programa;
   }

   toString() {
      let desc = "Ordenador " + this.marca + " " + this.model + " procesador " + this.procesador; 
      desc += " con " + this.ram + " de memoria RAM y " + this.disco + " de disco duro";
      return desc;
   }

}