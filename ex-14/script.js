/* Crie  um programa que calcula a área e o perímetro de um retângulo
Armazene os valores e realize os cálculos.
FÓRMULAS:
area = comprimento * largura
perimetro = 2 * (comprimento + largura)
*/

let comprimento = 20;
let largura = 10;

function calcularArea(comprimento, largura) {
  return comprimento * largura;
}

let area = calcularArea(comprimento, largura);
console.log("A área do retângulo é: " + `${area}`);

function calcularPerimetro(comprimento, largura) {
  return 2 * (comprimento + largura);
}

let perimetro = calcularPerimetro(comprimento, largura);
console.log("O perímetro do retângulo é: " + `${perimetro}`);
