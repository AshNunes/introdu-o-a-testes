const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./conversaoTemperatura');

test('Converte 0 Celsius para Fahrenheit corretamente', () => {
  const resultado = celsiusParaFahrenheit(0);
  expect(resultado).toBe(32);
});

test('Converte 32 Fahrenheit para Celsius corretamente', () => {
  const resultado = fahrenheitParaCelsius(32);
  expect(resultado).toBe(0);
});
