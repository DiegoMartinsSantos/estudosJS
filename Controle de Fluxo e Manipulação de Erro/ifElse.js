const estaEstudando = true;

if (estaEstudando === true) {
  console.log("Diego está estudando");
} else {
  console.log("Diego não está estudando");
}

if (undefined) {
  console.log("undefined tratado como true");
} else {
  console.log("undefined tratado como false");
}

if (null) {
  console.log("null tratado como true");
} else {
  console.log("null tratado como false");
}

if (0) {
  console.log("0 tratado como true");
} else {
  console.log("0 tratado como false");
}

if (NaN) {
  console.log("NaN tratado como true");
} else {
  console.log("NaN tratado como false");
}

if ("") {
  console.log("String vazia tratado como true");
} else {
  console.log("String vazia tratado como false");
}
