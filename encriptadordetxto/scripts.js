function encriptar() {
    var texto = document.getElementById("input-text").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            resultado += "ai";
        } else if (texto[i] == "e") {
            resultado += "enter";
        } else if (texto[i] == "i") {
            resultado += "imes";
        } else if (texto[i] == "u") {
            resultado += "ufat";
        } else if (texto[i] == "o") {
            resultado += "ober";
        } else {
            resultado += texto[i];
        }
    }

    var outputText = document.getElementById("output-text");
    outputText.value = resultado;
    outputText.classList.remove("placeholder-image");
}

function desencriptar() {
    var texto = document.getElementById("input-text").value;
    var resultado = "";
    var i = 0;

    while (i < texto.length) {
        if (texto[i] == "a" && texto[i + 1] == "i") {
            resultado += "a";
            i += 2;
        } else if (texto[i] == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
            resultado += "e";
            i += 5;
        } else if (texto[i] == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
            resultado += "i";
            i += 4;
        } else if (texto[i] == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
            resultado += "u";
            i += 4;
        } else if (texto[i] == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
            resultado += "o";
            i += 4;
        } else {
            resultado += texto[i];
            i++;
        }
    }

    var outputText = document.getElementById("output-text");
    outputText.value = resultado;
    outputText.classList.remove("placeholder-image");
}

function copiar() {
    var texto = document.getElementById("output-text").value;
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Texto copiado");
}
