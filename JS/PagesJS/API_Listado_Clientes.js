console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

// Datos locales simulando la API
// Datos locales simulando la API



let DatosFiltrados = []
let contenedor = document.getElementById('tbody');


//aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos()
    // ConsultarAPIClientes()

});

 // Consultar Datos del API mediante Fetch(AJAX) AXIOS

function consultarDatos() {
    //fetchget
    fetch(Api_Usuarios) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
            console.log(result)
            DatosFiltrados = result
        })
        .catch(error => {      ///4- Catch
            // common error
            alert("Error ",error)
            return null;
        });
    
}


function Mostrar_CampoTabla() {
    
    let html = ""

    DatosFiltrados.forEach(element => {
        console.log(element)

        html += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name} </td>
            <td>${element.email}</td>
        </tr>
        
        
        
        `
        
    });


    contenedor.innerHTML = html
}

// function ConsultarAPIClientes() {
//     fetch(Api_Usuarios)
        
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => {
//             // common error
//             return null;
//         });
    
// }