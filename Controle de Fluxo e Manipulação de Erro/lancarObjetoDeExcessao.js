function DiegoException() {
  var instanciaDeErro = new Error("Erro boladao");
  instanciaDeErro.id = 9999;
  instanciaDeErro.nome = "DiegoException";
  return instanciaDeErro;
}

try {
  throw DiegoException();
} catch (erro) {
  console.log(erro.mensagem + " com ID " + erro.id);
} finally {
  console.log("Encerrando as operações");
}
