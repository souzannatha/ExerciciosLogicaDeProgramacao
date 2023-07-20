/* Crie um programa que determina o valor de uma tarifa depedendo
da idade do usuário */
let tarifa = 2.5;
let usuario = "normal";
let idade = 20;

function calcularTarifa(tarifa, usuario) {
  if (usuario === "criança" && idade <= 6) {
    return "tarifa gratuita";
  } else if (usuario === "estudante" && idade >= 7 && idade <= 18) {
    return tarifa * 0.5;
  } else if (usuario === "idoso" && idade >= 60) {
    return tarifa * 0.3;
  } else if (usuario === "normal" && idade >= 19 && idade <= 59) {
    return tarifa;
  } else {
    return "dados errados";
  }
}
console.log(calcularTarifa(tarifa, usuario));
