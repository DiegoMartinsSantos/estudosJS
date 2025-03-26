/**
 * prototipos são objetos que herdam diretamente as propriedades passadas
 * por outros objetos para a criação do mesmo, ao chamar uma propriedade o js
 * procura a propriedade no objeto caso não encontre ele tenta no objeto acima dele
 */

function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.dormir = function () {
  console.log(this.nome + " ZZZZZZ");
};

function Humano(nome) {
  Animal.call(this, nome);
}

Humano.prototype = Object.create(Animal.prototype);
Humano.prototype.constructor = Humano;

Humano.prototype.falar = function () {
  console.log(this.nome + " fala alguma coisa");
};

const diego = new Humano("Diego");

diego.falar();
diego.dormir();
