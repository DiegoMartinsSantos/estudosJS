/* operaçoes matematicas como soma não são realizadas
caso o numero esteja armazenado como texto
*/

let num11 = "11";

console.log(
  "Logo ao realizar uma operação o comportamento realizado não é de uma operação matematica"
);
console.log(num11 + 1);

console.log("sendo necessario a conversão para realizar o calculo");

console.log(parseInt(num11) + 1);

console.log(parseFloat(num11) + 1);
