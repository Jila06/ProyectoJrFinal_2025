console.log(`Funcionando Archivo: Practica_IF`);


//caso 1
function verificarEdad() {
    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)
    

    if (edad >= 18) {

        alert(`Eres mayor de edad en ${pais}`)
    } else {

        alert(`No eres mayor de edad en ${pais}`)
    }



}

//caso 2
function verificarParImpar() {
    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        
        document.getElementById('mensajeParImpar').innerText = ("Es Par"); 
    } else {
        document.getElementById('mensajeParImpar').innerText = ("No es Par");
    }

    console.log(numeroconvertido)
}

//caso 3
function evaluarNota() {
    
    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

    //mayor de 90 excelente nota
    //mayor a 70 aprobado 
    //menor 70 reprobado 
    if (numeroconvertido >= 90) {
       // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if(numeroconvertido >= 70){
       // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }     
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}

// caso 4
function calcularDescuento() {
    let monto = document.getElementById('monto').value;

    let numeroconvertido = parseFloat(monto)
    console.log(numeroconvertido)

    let descuento = numeroconvertido * 0.9 

        if (numeroconvertido * 0.9 >= 100) {
            document.getElementById('mensajeDescuento').innerText = `Tiene un descuento del 10% es cual es ${descuento}`;
        } else {
            document.getElementById('mensajeDescuento').innerText = `No tiene un descuento`;
        }
    
    
}

//caso 5
function verificarMayorMenor() {
    let edad = document.getElementById('edadSimple').value;
    console.log(edad)

    if (edad >= 18) {

        document.getElementById('mensajeEdadSimple').innerText = `Eres mayor de edad`;
    } else {

        document.getElementById('mensajeEdadSimple').innerText = `Eres Menor de edad`;
    }
    
}

//parse int
//parseFloat decimales
//monto * 0.9

//Commit Entrega 1 Proyecto