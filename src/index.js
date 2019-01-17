let mensaje = document.getElementById("texto");
let cifrar= document.getElementById("cifrar");
let numero= document.getElementById("offset");

cifrar.addEventListener("click",()=>{
    let msj= mensaje.value;
    let offset = numero.value;
    let resultFinal = window.cipher.encode(offset,msj);
    document.getElementById ("texto-cifrado").innerHTML= resultFinal;



});
