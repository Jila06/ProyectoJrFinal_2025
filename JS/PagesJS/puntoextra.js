console.log('Funcionando Archivo: API_Listado_Clientes');

const Api = "https://jsonplaceholder.typicode.com/todos"

let DatosFiltrados = []

let contenedor = document.getElementById('tbody');

document.addEventListener('DOMContentLoaded', () => {
    consultarDatos()
    

});


function consultarDatos() {
    //fetchget
    fetch(Api) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
            console.log(result)
            DatosFiltrados = result
            Mostrar_CampoTabla()

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
            <td>${element.title} </td>
            <td>${element.completed}</td>
        </tr>
        
        
        
        `
        
    });


    contenedor.innerHTML = html
}