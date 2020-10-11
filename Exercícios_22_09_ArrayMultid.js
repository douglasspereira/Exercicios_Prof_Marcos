let array = [];

function salvarDados(){
  let nome = document.getElementById('nome').value;
  let materias = document.getElementsByName('materia').value;
  array.push(Object.entries(nome, materias));
  alert(array);
}