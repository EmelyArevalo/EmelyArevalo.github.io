function calcularVelocidad() {
    // Obtener los valores de los inputs
    var distanciaKm = parseFloat(document.getElementById('distanciaInput').value);
    var tiempoMin = parseFloat(document.getElementById('tiempoInput').value);

    // Verificar si los valores son válidos
    if (isNaN(distanciaKm) || isNaN(tiempoMin)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    // Realizar el cálculo de velocidad en m/s
    var velocidadMetrosSegundos = (distanciaKm * 1000) / (tiempoMin * 60);

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = 'Velocidad: ' + velocidadMetrosSegundos.toFixed(2) + ' m/s';
}




/*EJERCICIO 2*/


function clasificarTriangulo() {
    // Obtener los valores de los lados
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    // Verificar si los valores son válidos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert('Por favor, ingrese valores numéricos válidos para los lados del triángulo.');
        return;
    }

    // Clasificar el triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        mostrarResultado='Triángulo Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        mostrarResultado='Triángulo Isósceles';
    } else {
        mostrarResultado='Triángulo Escaleno';
    }

    document.getElementById('resultado1').innerText = mostrarResultado;
}




/*EJERCICIO 3*/






function realizarOperacion() {
    // Obtener los valores de los números y la operación
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacion = document.getElementById('operacion').value;

    // Verificar si los valores son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingrese valores numéricos válidos para los números.');
        return;
    }

    // Realizar la operación seleccionada
    var resultado;
    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            // Verificar si el divisor es cero
            if (numero2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert('Operación no válida.');
            return;
    }

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado3').innerText = 'Resultado: ' + resultado;
}















/*EJERCICIO 4*/




function verificarPrimo() {
    // Obtener el valor del número
    var numero = parseInt(document.getElementById('numeroInput').value);

    // Verificar si el valor es válido
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    // Verificar si el número es primo
    var esPrimo = esNumeroPrimo(numero);

    // Mostrar el resultado en el elemento con id 'resultado'
    if (esPrimo) {
        mostrarResultado('El número ' + numero + ' es primo.');
    } else {
        mostrarResultado('El número ' + numero + ' no es primo.');
    }
}

function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function mostrarResultado(resultado) {
    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado4').innerText = resultado;
}















