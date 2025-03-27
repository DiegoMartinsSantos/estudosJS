let contexto;
/*
ao declarar uma variavel mas não atribuir um valor
seu valor será undefined
*/

if (contexto) {
  console.log("Verdadeiro");
} else {
  console.log("Undefined no contexto booleano é tratado como falso");
}

console.log(
  "Undefined em contexto numericos é tratado como " +
    1 * contexto +
    " (not a number)"
);
