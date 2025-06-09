const calculadora = require("../models/calculadora");

test("rr", () => {
  expect(calculadora.somar(2, 4)).toBe(6);
});

test("100 + 5", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("erro test", () => {
  expect(calculadora.somar("gg", 100)).toBe("Erro");
});

test("Multi 50 * 50", () => {
  expect(calculadora.multi(50, 50)).toBe(50 * 50);
});
