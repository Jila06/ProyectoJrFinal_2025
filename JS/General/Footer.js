console.log('Archivo: Footer');
//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});

function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('IdFooter'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

    <!-- Inicio: footer-informacion    -->
        <div class="container">
            <div class="row">
                <!-- Inicio: Contenedor 1 5 columnas  -->

                <div class="col-md-5 col-sm-6">
                    <!-- Fin: Contenedor 1 -->
                    <p class="parrafo"> Siguenos en nuestras redes sociales para mantenerte al tanto
                     de todo.</p>
                </div>
                <!-- Fin: footer-mensaje -->

                <!-- Inicio: Contenedor 2 5 columnas  -->

                <div class="col-md-5 col-sm-6">

                    <!-- Fin: Contenedor 2 -->

                </div>
                <!-- Inicio: Contenedor 3 2 columnas  -->
                <div class=" col-md-2 col-sm-6 iconos">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <!-- Fin: Contenedor 3 -->
                </div>

            </div>
            <!-- Inicio: Contenedor 1 12 columnas  -->
            <div class="col-md-12 ">
                <p class=""> Copyright @2025 TicketsCR| Jilari Brown</p>
            </div>
            <!-- Fin: footer-mensaje -->

        </div>
`;
    
}