// Criar um site estilizado com o lançamento de notas de uma turma, onde o 
    // usuário ira inserir as notas dos bimestres. Ao clicar no botão de ação,
    // o sistema devera calcular automaticamente e apresentar a media dos alunos
    // e informar se foi "aprovado" ou "reprovado". ("aprovado" caso a media seja
    // acima ou igual a 7.0).

// A turma deve ter no minimo 15 alunos.

// Exemplo: ao inserir as notas dos alunos, o valor da media deverá ser calculado
    // ao pressionar o botão e informar se ele foi aprovado ou não, então aparecera
    // a mensagem ao lado da media, e seu nome ficará em destaque de alguma forma,
    // somente o aluno com a maior media devera ter seu nome em destaque.

// O aluno que tiver a maior media deverá aparecer em destaque caso ele tenha sido aprovado.


    let alunos = [
        {aluno: "Douglas", "media": 0, idMedia: "a1media", idNota1: "a1nota1", idNota2: "a1nota2", idNota3: "a1nota3"},
        {aluno: "Paulo", "media": 0, idMedia: "a2media", idNota1: "a2nota1", idNota2: "a2nota2", idNota3: "a3nota3"},
        {aluno: "João", "media": 0, idMedia: "a3media", idNota1: "a3nota1", idNota2: "a3nota2", idNota3: "a3nota3"},
        {aluno: "Roberto", "media": 0, idMedia: "a4media", idNota1: "a4nota1", idNota2: "a4nota2", idNota3: "a4nota3"},
        {aluno: "Anderson", "media": 0, idMedia: "a5media", idNota1: "a5nota1", idNota2: "a5nota2", idNota3: "a5nota3"},
        
        {aluno: "Henrique", "media": 0, idMedia: "a6media", idNota1: "a6nota1", idNota2: "a6nota2", idNota3: "a6nota3"},
        {aluno: "Cauã", "media": 0, idMedia: "a7media", idNota1: "a7nota1", idNota2: "a7nota2", idNota3: "a7nota3"},
        {aluno: "Ana", "media": 0, idMedia: "a8media", idNota1: "a8nota1", idNota2: "a8nota2", idNota3: "a8nota3"},
        {aluno: "Beatriz", "media": 0, idMedia: "a9media", idNota1: "a9nota1", idNota2: "a9nota2", idNota3: "a9nota3"},
        {aluno: "Junior", "media": 0, idMedia: "a10media", idNota1: "a10nota1", idNota2: "a10nota2", idNota3: "a10nota3"},
        
        {aluno: "Mateus", "media": 0, idMedia: "a11media", idNota1: "a11nota1", idNota2: "a11nota2", idNota3: "a11nota3"},
        {aluno: "Laura", "media": 0, idMedia: "a12media", idNota1: "a12nota1", idNota2: "a12nota2", idNota3: "a12nota3"},
        {aluno: "Fernando", "media": 0, idMedia: "a13media", idNota1: "a13nota1", idNota2: "a13nota2", idNota3: "a13nota3"},
        {aluno: "Maicon", "media": 0, idMedia: "a14media", idNota1: "a14nota1", idNota2: "a14nota2", idNota3: "a14nota3"},
        {aluno: "Karina", "media": 0, idMedia: "a15media", idNota1: "a15nota1", idNota2: "a15nota2", idNota3: "a15nota3"}
    ]
    
function calcularMedia() {
    for (let i = 0; i < 2; i++) {
        console.log(alunos[i].idMedia);
        document.getElementById(alunos[i].idMedia).value = (parseFloat(document.getElementById(alunos[i].idNota1).value) + 
        parseFloat(document.getElementById(alunos[i].idNota2).value) + parseFloat(document.getElementById(alunos[i].idNota3).value)) / 3;
    }
}

function notaMax() {
    let maximo = 0;
    for (let i = 0; i < alunos.lenght; i++) {
        if (alunos[i].media > maximo) {
            maximo = alunos[i].media;
        }
    }
    document.getElementById("notaAlta").value = maximo;
}
