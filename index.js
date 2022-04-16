const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorAtual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperaciones = document.querySelectorAll('.operadores');

const display = new Display(displayValorAnterior, displayValorAtual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregoNumero(boton.innerHTML); 
    });
});

botonesOperaciones.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    });
});