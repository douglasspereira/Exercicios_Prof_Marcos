// Criar uma tela de login com os campos login e senha. Os seguintes logins podem ser autenticados
// *login* - *senha*
// joao - 1234
// caio - senha
// bruno - senha123

// utilizar a estrutura de array.

// ao realizar a autenticacao deve apresentar uma mensagem para o usuario informando que foi autenticado.

// Caso o login esteja errado deve informar ao usuario uma mensagem de login invalido.
// Caso a senha esteja errada deve informar a senha uma mensagem de senha invalida.

let alunos = ["joão", "caio", "bruno"];
let senhaAluno = ["1234", "senha", "senha123"]

function realizarLogin(usuario, senha) {
  for (i = 0; i <= alunos.length; i++) {
    if (alunos[i] == usuario) {
      if (senhaAluno[i] == senha) {
        console.log("Login realizado com sucesso");
      } else {
        console.log("Senha incorreta");
        }
    } else {
      console.log("Usuário incorreto");
    }
  }
}
realizarLogin("joão", "1234");
