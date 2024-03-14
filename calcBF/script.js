function calcularIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    var imc;
    if (gender === "male") {
        imc = weight / (height * height);
    } else { 
        imc = 1.3 * weight / (height * height);
    }

    var resultado = "Seu IMC é: " + imc.toFixed(2) + "<br>";

    if (imc < 18.5) {
        resultado += "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += "Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += "Você está com sobrepeso.";
    } else {
        resultado += "Você está obeso.";
    }

    document.getElementById('resultado').innerHTML = resultado;
}