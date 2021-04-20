const actions = document.querySelectorAll('button');

const counterMarkup = document.querySelector('#counter span');

//let counterValue = Number(counterMarkup.textContent);
let counterValue = 0;

actions[1].addEventListener('click', () => {
    
    counterValue = increment(counterValue)
    counterMarkup.textContent = counterValue;

    
})

actions[0].addEventListener('click', () => {
    
    counterValue = decrement(counterValue)
    counterMarkup.textContent = counterValue;
    
})

function increment(iter) { return iter += 1;}
function decrement(iter) { return iter -= 1;}