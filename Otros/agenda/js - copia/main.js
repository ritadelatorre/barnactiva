const contactos = []; //Definimos el array  con el cual vamos a trabajar
let index1 = 0;
let index2 = 0;

function f11() {
    console.clear();
    console.log(agenda);
}

function f12() {
    console.clear();
    console.table(agenda[0].contactos[3]);
}

function f13() {
    console.clear();
    console.table(agenda[1]);
}

function f21(){
    console.clear; //Limpiar la consola

    let categoriaBuscada = "Emergencias"; // se puede pedir por prompt o no...
    let i = agenda.findIndex(agenda => agenda.categoria == categoriaBuscada);
    //findIndex es lo mismo que Buscar el objeto y luego preguntar indexOf(Objeto)
    //Guardamos la posición en i
    console.log("Posición EMERGENCIAS", i);

    let contactoBuscado = "Bomberos";
    
    let bomberos = agenda[i].contactos.find(contactos => contactos.contacto === contactoBuscado);
    console.table(bomberos);
    //console.table muestra un array en forma de tabla (más cómodo de ver)
    //Respuesta a Jordi: para usar toString los objetos de agenda 
    //deberían Haberse creado a través de las clases 
}

function f20{
    let contacto = prompt("¿Qué contacto quieres buscar?").toUpperCase();
    let info = 0;
    do {
        info = parseInt(prompt("¿Qué información quieres? 1=Telefono, 2=Web, 3=Todo"));
        if (info < 1 || info > 3) {
            alert("Introduce un número entre 1 y 3");
        }
    } while (info < 1 || info > 3);
    muestraContacto(contacto,info);
}

function muestraContacto(contactoAgenda, infoContacto){
    console.clear();
    //contactoAgenda: Contacto a buscar
    //infoContacto: (1=Telefono, 2=Web, 3=Todo)

    let stringContacto = "";
    let encontrado = false;
    index1 = 0;
    let elementosAgenda = agenda.length;
    let contactosCategoria;
   
    while ( index1 < elementosAgenda && !encontrado ){
        index2 = 0;
        contactosCategoria = agenda[index1].contactos.length;     
        
        while (index2 < contactosCategoria && !encontrado){
            console.log(agenda[index1].contactos[index2]);

            if (contactoAgenda == agenda[index1].contactos[index2].contacto.toUpperCase()) {
                encontrado = true;
                stringContacto = "Contacto: " + agenda[index1].contactos[index2].contacto;
                switch (infoContacto){
                    case 1:
                        stringContacto += "\nTeléfono: " + agenda[index1].contactos[index2].numeroTelefono;
                        break;
                    case 2:
                        stringContacto += "\nWeb: " + agenda[index1].contactos[index2].web;
                        break;
                    case 3:
                        stringContacto += "\nTeléfono: " + agenda[index1].contactos[index2].numeroTelefono;
                        stringContacto += "\nWeb: " + agenda[index1].contactos[index2].web;
                        break;
                } 
            }
           index2++;
        }
        index1++;
    }
   alert(stringContacto);
}

function f32() {
    agenda.push(new Categoria("Taxis"));
    console.table(agenda); 
}

function find(array, criteriaFn) {
    for (let i = 0; i < array.length; i++) {
        if (criteriaFn(array[i])) {
        return array[i]
        }
    }
}
