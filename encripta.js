// Función para eliminar acentos
function eliminarAcentos(texto) {
    const acentos = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };
    return texto.split('').map(letra => acentos[letra] || letra).join('');
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}


// Función para encriptar
function encriptaElTexto() {
    // Captura el valor del textarea
    let texto = document.getElementById('miTextarea').value;
   
    // Elimina los acentos
    let textoSinAcentos = eliminarAcentos(texto);
    
    // Encripta el texto
    let textoEncriptado = encriptarTexto(textoSinAcentos);

    
    // Muestra el resultado de la encriptacion
    document.getElementById('mensaje').innerText = textoEncriptado;

    //Limpiar textArea
    document.getElementById('miTextarea').value = "";

    //ocultar imagen
    let imageMono = document.getElementById('imagenMono');
    imageMono.style.display = 'none';

    //Mostar Boton
    let btnCopy = document.getElementById('botonCopiar');
    btnCopy.style.display = 'inline-Block';

}


//Funcion para desencriptar

// Función para procesar el texto del textarea
function desencriptarElTexto() {
    // Captura el valor del textarea
    let texto = document.getElementById('miTextarea').value;

       
    // Elimina los acentos
    let textoSinAcentos = eliminarAcentos(texto);
    
    // Encripta el texto
    let textoDesencriptado = desencriptarTexto(textoSinAcentos);

    
    // Muestra el resultado de la encriptacion
    document.getElementById('mensaje').innerText = textoDesencriptado;

    //Limpiar textArea
    document.getElementById('miTextarea').value = "";

    
    //ocultar imagen
    let imageMono = document.getElementById('imagenMono');
    imageMono.style.display = 'none';

    //Mostar Boton
    let btnCopy = document.getElementById('botonCopiar');
    btnCopy.style.display = 'inline-Block';

}

//funcion para copiar contenido
function copiarTexto() {
    // Captura el elemento textarea
    let mensaje = document.getElementById('mensaje');
    
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            // Muestra una alerta de confirmación
            alert("Texto copiado al portapapeles: " + mensaje.value);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
        document.getElementById('mensaje').value = "";
        //mensaje.style.backgroundImage = 'url("/assets/mono-diamante.png")';



}