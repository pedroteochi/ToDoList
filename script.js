const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');

button.addEventListener('click', catchValue);

function catchValue(){
    console.log(input.value);
}