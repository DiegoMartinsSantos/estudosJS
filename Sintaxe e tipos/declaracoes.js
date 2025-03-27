console.log(
  "A variavel foi declarada globalmente porem seu valor sera atribuido depois resultando em " +
    variavelPadrao +
    " agora"
);

var variavelPadrao = "Porem acessando agora ela tem um valor";

console.log(variavelPadrao);

/*
Isso demonstra que durante a fase compilação o javascript levanta
todas as declarações de variaveis do tipo var (conceito de hosting)
*/

let variavelLet;

variavelLet =
  "Só está disponivel no contexto em que foi inserida, não está disponivel globalmente e ";

variavelLet =
  variavelLet +
  "além disso pode ser alterada após sua inicialização como o var";

console.log(variavelLet);

const variavelConst =
  "Só está disponivel no contexto em que foi inserida semelhante ao let, não está disponivel globalmente, tem que ter seu valor atribuido durante a declaração e " +
  " e seu valor não pode ser alterado.";

console.log(variavelConst);
