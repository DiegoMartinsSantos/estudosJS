/**
 * Funções de primeira classe indicam que funções  são tratadas como variaveis
 * e podem ser passadas como parametros em outras funções para ser executadas
 * abaixo declaro a função olá mundo, crio uma variavel chamada
 * variavelComfunção, passo o valor como a função olaMundo
 * em seguida crio a função executar que recebe a variavelComFuncao que
 * executa a funcao olaMundo
 */

function olaMundo() {
  console.log("Ola mundo!");
}

var variavelComFuncao = olaMundo;

function executar(olaMundo) {
  olaMundo();
}

executar(variavelComFuncao);
