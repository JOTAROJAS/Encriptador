const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncritar){

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncritar = stringEncritar.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++){
        if(stringEncritar.includes(matrizCodigo[i][0])){
            stringEncritar = stringEncritar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

            
        }

    }
    
    return stringEncritar;
}

function desencriptar(stringDesencritar){

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencritar = stringDesencritar.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++){
        if(stringDesencritar.includes(matrizCodigo[i][1])){
            stringDesencritar = stringDesencritar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0 ]);

        }

    }
    
    return stringDesencritar;
}


function copiartexto(){
    textArea.value = mensaje.value;
    mensaje.value = "";

}

