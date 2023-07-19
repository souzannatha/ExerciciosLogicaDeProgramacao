/*Faça uma função para conversão de temperatura, Celsius para Fahrenheit
Celsius para fahrenheit (tempCelsius *9/5) +32
fahrenheit para celsius (tempFahrenheit -32) * 5/9
*/

let celsius = 20;
let fahrenheit = 89;

function converterCelsius(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(converterCelsius(celsius));

function converterFahrenheit(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(converterFahrenheit(fahrenheit))