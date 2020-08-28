// Criar um sistema onde o usuário deverá inserir um numero inteiro.
// O sistema irá executar uma função que gerará um numero randômico,
// e apresentar em quantas tentativas o sistema precisou para o numero
// randômico ser igual ao numero que foi inserido pelo usuário. Os números
// deverão aparecer no console.log e a quantidade de vezes executado deverá
// ser apresentado para o usuário.

// Criar 2 cenários, o primeiro onde a aposta devera ser entre os números de 0 ate 9
// (0,1,2,3,4,5,6,7,8,9) e o segundo onde a aposta devera ser entre os números 0 ate 99
// (0,1,2,3,4,5...96,97,98,99).


let contador = 0;
let randomico = 0;
let aleatorios= [];

function jogoNumeros9() {
let numero = Number(prompt('Digite um número entre 0 e 9'));
  while (randomico !== numero) {
    if (numero >= 0 && numero <= 9) {
      randomico = Math.floor(Math.random() * 10);
      aleatorios.push(randomico);
      contador ++;
    }
  }
  console.log(`O número digitado pelo usuário foi ${numero}`);
  console.log(`O sistema precisou de ${contador} tentativas para acertar o número`);
  console.log(`Os números aleatórios executados pelo programa foram: ${aleatorios}`);
}


function jogoNumeros99() {
let numero = Number(prompt('Digite um número entre 0 e 99'));
  while (randomico !== numero) {
    if (numero >= 0 && numero <= 99) {
      randomico = Math.floor(Math.random() * 100);
      aleatorios.push(randomico);
      contador ++;
    }
  }
  console.log(`O número digitado pelo usuário foi ${numero}`);
  console.log(`O sistema precisou de ${contador} tentativas para acertar o número`);
  console.log(`Os números aleatórios executados pelo programa foram: ${aleatorios}`);
}