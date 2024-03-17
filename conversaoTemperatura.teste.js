const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./conversaoTemperatura');

test('Deve retornar "Celsius para Fahrenheit"', () => {
  const resultado = celsiusParaFahrenheit(0);
  expect(resultado).toBe(32);
});

test('Deve retornar "Fahrenheit para Celsius"', () => {
  const resultado = fahrenheitParaCelsius(32);
  expect(resultado).toBe(0);
});
