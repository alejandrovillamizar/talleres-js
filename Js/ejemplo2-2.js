// conversion de temperaturas: Celsius a Fahrenheit

const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);

// conversion de kilometros a millas 
const kilometros = 100;
const millas = kilometros * 0.621371;
console.log(`${kilometros} km equivalen a ${millas.toFixed(2)}millas`);

// conversion de pesos colombianos a dolares (tasas de ejemplo:4000)

const pesos = 500000;
const tasa = 4000;
const dolares = pesos / TaskSignal;
console.log(`$${pesos} COP equivalen a US$$${dolares.toFixed(2)}`);

// calcular indice de IMC
const peso = 68;//kg
const altura = 1.89;//metros

const imc = peso / (altura*altura);

console.log(`IMC es: ${imc.toFixed(3)}`);