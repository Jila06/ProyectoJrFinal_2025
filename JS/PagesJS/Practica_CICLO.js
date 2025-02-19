console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];


let Clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

console.log(personas[4])

console.log(personas[1].nombre)
//array [x]
//objeto

//bucles o ciclos

//foreach

//quite el array y ponga el suyo
personas.forEach(element => {

    console.log(element)
    
});

Clientes.forEach(element => {
    if (element.activo === true) {
        console.log(element.nombre, element.activo)
        
    }
    
    
});

//cantidad de elemntos de un array
console.log(personas.length

)

let buscarnombre = personas.find(x => x.nombre === "Ana")

console.log(buscarnombre)

let buscaractivo = personas.find(x => x.activo === true)

console.log(buscaractivo)


function Filtrar(params) {

    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
    
}


//caso 1
function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value;
    let resultado = document.getElementById('resultadoBusqueda');

    let busqueda = personas.find(x => x.nombre.toUpperCase() === input1.toUpperCase())

    if (busqueda) {
        
        resultado.innerHTML = `Encontrado a la persona ${busqueda.nombre}`

    } else {
        
        resultado.innerHTML = `No se ha encontrado a la persona `

    }

}

//Crear la funcion del onclick //check 
// Input id value //no tiene 
//  mostrar el resultado inner 

//caso 2
function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');

    let busqueda = personas.find(x => x.activo === true)

    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {

        resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

    } else {

        resultado.innerHTML = `No se encontro nadie activo `

    }
} 

// caso 3
function primeraMayorDeEdad() {
    let resultado = document.getElementById('resultadoMayor');

    let busqueda = personas.find(x => x.edad >= 18 )

    if (busqueda) {
        resultado.innerHTML = `La primera persona encontrada es ${busqueda.nombre} con ${busqueda.edad} años`
        
    } else {
        resultado.innerHTML = `No se encontro a nadie Mayor de edad `
    }
    
}

//caso 4
function mostrarTodasLasPersonas() {
    let resultado = document.getElementById('listaPersonas');

    personas.forEach(element => {

            resultado.innerHTML += `
            <li> nombre: ${element.nombre}, edad: ${element.edad}, activo: ${element.activo} </li>


          ` 

        
    });
    
}

//caso 5

function mayoresDeEdad() {
    let resultado = document.getElementById('listaMayores');

    personas.forEach(element => {
        if (element.edad >= 18) {
            resultado.innerHTML += `
              <li> nombre: ${element.nombre} </li>


            `
            
            
        }
        
    });
    
}

 //caso 6
 function personasActivas() {
   let resultado = document.getElementById('listaActivos');

     personas.forEach(element => {
        
       if (element.activo === true) {
            resultado.innerHTML += `
              <li> nombre: ${element.nombre}</li>


            `
            
         }
        
     });
    
 }


 //caso 6
// function personasActivas() {
//     let resultado = document.getElementById('listaActivos'); // Para mostrar donde queremos poner el resultado

//     personas.forEach(element => {  //forma mas facil de usar un array
//         if (element.activo === true) {
//             //se puede añadir if dentro de for each 
//             resultado.innerHTML += `              
//             <li> nombre: ${element.nombre}</li>
//             `
//         }
        
//     });
    
// }

//caso 6
// function personasActivas() {
//     let resultado = document.getElementById('listaActivos'); // Para mostrar donde queremos poner el resultado

//     personas.forEach(element => {  //agarra cada elemento de un array
//         if (element.activo === true) {
//             //se puede añadir if dentro de for each 
//             resultado.innerHTML += `              
//             <li> nombre: ${element.nombre}</li>
//             `
//         }
        
//     });
    
// }


//caso 6
// function personasActivas() {
//     let resultado = document.getElementById('listaActivos'); // En que id queremos mostar el resultado

//     personas.forEach(element => {  //forma mas facil de usar un array
//         if (element.activo === true) {
//             //se puede añadir if dentro de for each 
//             resultado.innerHTML += `              
//             <li> nombre: ${element.nombre}</li>
//             `
//         }
        
//     });
    
// }