/* Criar uma pagina com 2 input`s sendo eles, nome e idade.
criar um array para salvar no LocalStorage quando clicar no
botão criar, deverá ser criado um objeto e ser salvo no array
e atualizar o LocalStorage. Ao clicar no botão apresentar, 
deverá ser recolhido o array que está salvo no LocalStorage e
apresentado dentro de uma div. */

let usuarios = [];
let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let mostrar = document.getElementById('apresentar');

function criarUsuario(nome, idade){
  this.Nome = nome;
  this.Idade = idade;
}

function novoUsuario(){
  if(nome.value && idade.value){
    let add = new criarUsuario(nome.value, idade.value);
    usuarios.push(add);
    localStorage.setItem('user', JSON.stringify(usuarios));
    alert('Usuario Cadastrado');
  }else{
    alert('Preencha todos os campos');
  }
}

function apresentarUsuario(){
  mostrar.innerHTML = localStorage.getItem('user');
}

function resetarTudo(){
  nome.value = null;
  idade.value = null;
  mostrar.innerHTML = null;
}