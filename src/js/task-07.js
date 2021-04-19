

const inputRangeElem = document.querySelector('input#font-size-control');

const textElem = document.querySelector('span#text');

console.log(inputRangeElem);

inputRangeElem.addEventListener('input',
() => {
    
    textElem.style.fontSize = inputRangeElem.value+'px';
    });
