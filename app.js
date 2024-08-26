const TextoI= document.querySelector(".inicial");//almacenar texto
const mensaje= document.querySelector(".mensaje");//almacenar mensaje

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botonEncriptar(){
    const textoEncriptado =encriptar(TextoI.value);
    mensaje.value=textoEncriptado;
    TextoI.value ="";
    
}
function encriptar(stringEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        
        }
    }
    return stringEncriptado;
}

function botonDesencriptar(){
    const textoEncriptado =desencriptar(TextoI.value);
    mensaje.value=textoEncriptado;
    textArea.value ="";
}
function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        
        }
    }
    return stringDesencriptado;
}

document.getElementById("botonCopiar").addEventListener("click", function() {
    const mensaje = document.querySelector(".mensaje").value;

    // Usamos la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(mensaje).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
});