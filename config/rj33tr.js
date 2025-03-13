// Função para validar o login (nome de usuário e senha)
function validarLogin(username, password) {
    // Lógica de validação
    const usuarioValido = 'SOCIO';
    const senhaValida = 'Socio2@25';

    // Verifica se o nome de usuário e a senha estão corretos
    return username === usuarioValido && password === senhaValida;
}
