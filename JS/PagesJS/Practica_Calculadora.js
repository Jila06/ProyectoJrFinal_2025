
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    debugger
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    //Mostrar
    //Alert , Console log /Inner 
    //cl
    console.log('Mostrar Nombre :',nombre);
    console.log('Mostrar Edad:',edad);
    console.log('Mostrar Email:',email);
    console.log('Mostrar Telefono:',telefono);

    alert(`Nombre: ${nombre} Edad: ${edad} Email: ${email} Telefono: ${telefono}`)
}

function realizarSuma() {
    console.log("Funcionando realizarSuma")

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

//LS , LO , LA
   //Typescript int decimal
   //ParseInt 
    let Suma = parseInt(numero1) + parseInt(numero2)

    document.getElementById('resultado').innerText = Suma;

    console.log(numero1)
    console.log(numero2)
    console.log(Suma) 
}
