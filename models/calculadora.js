function somar(num1, num2) {
  const s = num1 + num2;
  if (typeof s != "number") {
    return "Erro";
  }
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "Erro";
  } else {
    return num1 + num2;
  }
}

function multi(num1, num2) {
  return num1 * num2;
}

exports.somar = somar;
exports.multi = multi;
