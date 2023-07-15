/*Escreva uma função que receba uma string como parâmetro e verifique se ela é vazia.*/

let string = "";
function verificar(string) {
  if (string === "") {
    return "é uma string vazia";
  } else {
    return "essa string não é vazia";
  }
}
console.log(verificar(string))