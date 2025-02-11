console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

// Datos locales simulando la API
let Datos_Locales = [];

DatosFiltrados = []
let contenedor = document.getElementById('tbody');//el contenedor se puso afuera para reutilizarlo

DatosFiltrados = Datos_Locales

// Mostrar_CampoTabla()
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos()
    
});


function consultarDatos() {

    fetch(Api_Usuarios)
        
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            // common error
            return null;
        });
    
}