

//la crea array  
//lo -- crea objeto
//kv -- crea key : value 


export let Datos_LiNav = [

    {
        Id: 1, //numero
        Nombre: "Tickets CR", //nombre que ve el usuario
        Detalle: "Proyecto",   // Si es practica o proyecto
        Url: "TicketsCR.html", // ruta de la pagina
        Activo: true // Si la pagina esta activa o no, para visualizarla o no
    },
    {   Id: 2,
        Nombre: "Datos Personales",
        Detalle: "Practica",      
        Url: "Datos-Personales.html",
        Activo: true
    },
    {   Id: 3,
        Nombre: "Listado Clientes", 
        Detalle: "Practica",     
        Url: "Listado-Clientes.html",
        Activo: true
    },
    {   Id: 4,
        Nombre: "Tarea Pokemon",   
        Detalle: "Practica",  
        Url: "/Practica_TareaPokemon.html",
        Activo: false
    },
    {   Id: 5,
        Nombre: "Tarea Netflix",    
        Detalle: "Practica", 
        Url: "/Practica_TareaNetflix.html",
        Activo: false
    },
    {   Id: 7,
        Nombre: "API_TareaPokemon",    
        Detalle: "Proyecto", 
        Url: "/API_TareaPokemon.html",
        Activo: false
    },
    {   Id: 8,
        Nombre: "API_Listado_Cliente",    
        Detalle: "Proyecto", 
        Url: "/API_Listado_Clientes.html",
        Activo: false
    },
    {   Id: 9,
        Nombre: "API_VerUsuario",    
        Detalle: "Proyecto", 
        Url: "/API_VerUsuario.html",
        Activo: false
    },
    {   Id: 10,
        Nombre: "API_Contacto",    
        Detalle: "Proyecto", 
        Url: "/API_Contacto.html",
        Activo: false
    },
    {   Id: 11,
        Nombre: "Verifica",    
        Detalle: "Practica ", 
        Url: "Verifica.html",
        Activo: true
    },
    {   Id: 12,
        Nombre: "Practica CICLO",    
        Detalle: "Practica ", 
        Url: "/Practica_CICLO.html",
        Activo: false
    },
    {
        Id: 14,  
        Nombre: "Punto Extra",  
        Detalle: "Puntos Extra",  
        Url: "/puntoextra.html",  
        Activo: true  
    },
];

export let urlCompleta = window.location.href; // Obtiene la URL completa
export let nombrePagina = window.location.pathname.split("/").pop().replace(".html", ""); // Elimina ".html"




