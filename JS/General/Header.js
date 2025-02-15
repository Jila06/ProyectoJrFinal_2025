
import {nombrePagina} from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});



// Assets/image1.png
function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('Header'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 ">
                        <img src="Assets/images (1).jpg" class="w-100" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center"> Bienvenidos a ${nombrePagina}</h3>
                            <p class="lead mt-5">
                                Aqui encontraras todos los eventos y conciertos que habran proximamente en Costa Rica, ademas de ver algunas de las
                                recomendaciones de nuestros clientes, calcular tu edad para ver si eres apto para ciertos conciertos o 
                                eventos y muchas mas cosas.
                            </p>


                            <a class="btn btn-secondary btn-lg mt-2 d-flex justify-content-center" href="https://www.eticket.cr/" role="button">Ver conciertos </a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;
    
}