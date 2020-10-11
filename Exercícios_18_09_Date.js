let pessoas = document.getElementById('pessoas');
let inputData = document.getElementById('input2').value.split('-').join('/');
;
console.log(data)

function totalPessoas(){
  if(pessoas.value < 2 || data < new Date){
    alert('Mínimo 2 pessoas e insira a data apartir de hoje');
  } else{
    alert('aceito')
    }
}