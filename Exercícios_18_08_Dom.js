let nome = document.getElementsByName('nome');

function cadastrar(){
    for(i=0; i < NodeList.length; i++){
    }
   alert(nome[0].value);
}

function mostrar(){
  document.getElementById('mostrar').innerHTML = '<br>' + nome[0].value;
}

/* mouseenter */

// Este manipulador será executado apenas uma vez quando o cursor se mover sobre a lista não ordenada
let tabela = document.getElementById('tabela').addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "red";

  // Redefine a cor após um pequeno atraso
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


/* mouseover */

// Este manipulador será executado toda vez que o cursor for movido sobre um item diferente da lista
let tabela2 = document.getElementById('tabela2').addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";

    // Redefine a cor após um pequeno atraso
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


/* Eventos Avançar e Voltar */

document.getElementById('voltar').addEventListener('click', function (){ // adicionando um evento a um elemento
  history.back();
});

document.getElementById('avançar').addEventListener('click', function (){ // adicionando um evento a um elemento
  history.forward();
});