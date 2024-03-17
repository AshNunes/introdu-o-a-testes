const verifica = require('./email');

test('should return "example@gmail.com"', () => {

    const resultado = verifica();

    expect(resultado).toBe('example@gmail.com');
})