
const inputForm = document.querySelector('input');
const helloName = document.querySelector('#name-output');

console.log(inputForm.value);

inputForm.addEventListener('input',
() => {
    helloName.textContent = inputForm.value !== '' ? inputForm.value :'незнакомецц';
});