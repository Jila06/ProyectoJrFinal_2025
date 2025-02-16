console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
        <p class="h2 mb-2">
        Me encanta esta pagina puedo buscar los conciertos y eventos que pasaran en Costa Rica de una forma mas rapida y eficaz! 
        </p>
        <p class="h4 lead">-Juan Perez </p>
    </div>
                


`;
    
}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/241009083054833_performer_img_1200x400.jpg" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Camilo</h2>
                            <p>
                                FEBRERO 23 2025 <br>
                                PARQUE VIVA	ALAJUELA a las 19:00 hrs <br>
                                CAMILO - NUESTRO LUGAR FELIZ TOUR

                            </p>
                            <a class="btn btn-primary btn-lg" href="https://www.eticket.cr/eventos.aspx?idartista=1178">Ver mas</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>


                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/241015105734179_performer_img_1200x400.jpg" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Chayanne</h2>
                            <p>
                                ABRIL 5 2025 <br>
                                ESTADIO NACIONAL <br>
                                CHAYANNE - BAILEMOS OTRA VEZ TOUR
                            </p>
                            <a class="btn btn-primary btn-lg" href="https://www.eticket.cr/eventos.aspx?idartista=826">Ver mas</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/250205145406387_performer_img_1200x400.jpg" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Reik</h2>
                            <p>
                                MAYO 3 2025
                                Centro de Eventos Pedregal	BELEN
                                REIK 2025 - EVENTO PARA MAYORES DE 18 AÑOS
                            </p>
                            <a class="btn btn-primary btn-lg" href="https://www.eticket.cr/eventos.aspx?idartista=1204">Ver mas</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>
`;
    
}