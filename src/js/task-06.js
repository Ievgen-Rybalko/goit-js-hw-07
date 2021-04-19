
const inputToValideate = document.querySelector('#validation-input');

const inputLength = Number(inputToValideate.getAttribute('data-length'));


inputToValideate.addEventListener('blur', () => {
    if (inputToValideate.value !== '') {
        if (inputToValideate.value.length === inputLength) {
            inputToValideate.classList.remove('invalid');
            inputToValideate.classList.add('valid');
        } else {
            inputToValideate.classList.remove('valid');
            inputToValideate.classList.add('invalid');
        }
    } else {
            inputToValideate.classList.remove('valid');
            inputToValideate.classList.remove('invalid');
    }
    
    
 });

