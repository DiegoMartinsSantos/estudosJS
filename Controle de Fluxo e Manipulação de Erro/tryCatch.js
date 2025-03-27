try {
  const teste = 1;
  teste = 2;
} catch (erro) {
  console.log("Variaveis constantes não podem ser alteradas");
}

try {
  throw "Lancei um erro e capturei";
} catch (erro) {
  console.log(erro);
}
