function calcularIMC() {
    var formulario = document.getElementById("formulario");

    var kilos   = formulario.kilos.value;
    var altura  = formulario.altura.value;

    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(1);

    if (imc < 20) {
        alert("Abaixo do Peso");
    }
    else if (imc > 20 && imc <= 25) {
        alert("Peso Ideal");
    }
    else if(imc > 25 && imc <= 30){
        alert("Sobrepeso");
    }
    else if(imc > 30 && imc <= 30){
        alert("Obesidade Moderada");
    }
    else if(imc > 35 && imc <= 40){
        alert("Obesidade Severa");
    }
    else if (imc > 40 && imc <= 50) {
        alert("Obesidade Mórbida");
    }
    else {
        alert("Super Obesidade");
    }

    return true;
}

/*function limpar() {
    document.getElementById("formulario").reset();
}*/ //limpar todos os campos.
