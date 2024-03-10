document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var calcularButton = document.getElementById('calcular');
    var valueSpan = document.getElementById('value');
    var descriptionSpan = document.getElementById('description');

    if (!form || !weightInput || !heightInput || !calcularButton || !valueSpan || !descriptionSpan) {
        console.error('Elementos necessários não encontrados. Verifique seus IDs.');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var weight = parseFloat(weightInput.value);
        var height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        var imc = weight / (height * height);

        valueSpan.textContent = imc.toFixed(2);

        if (imc < 18.5) {
            descriptionSpan.textContent = 'Você está abaixo do peso.';
        } else if (imc >= 18.5 && imc < 25) {
            descriptionSpan.textContent = 'Você está com peso normal.';
        } else if (imc >= 25 && imc < 30) {
            descriptionSpan.textContent = 'Você está com sobrepeso.';
        } else {
            descriptionSpan.textContent = 'Você está obeso.';
        }
    });
});