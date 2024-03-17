function verificarSenha(senha) {
  const comprimentoMinimo = 8;
  const regexLetrasENumeros = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  if (senha.length < comprimentoMinimo) {
    return false;
  }

  if (!regexLetrasENumeros.test(senha)) {
    return false;
  }

  return true;
}

module.exports = verificarSenha;
