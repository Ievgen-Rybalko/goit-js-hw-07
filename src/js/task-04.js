const actions = document.querySelectorAll('button');

const counterMarkup = document.querySelector('#counter span');

let counterValue = Number(counterMarkup.textContent);

actions[1].addEventListener('click', () => {
    
    counterMarkup.textContent = increment(Number(counterMarkup.textContent));
    
})

actions[0].addEventListener('click', () => {
    
    counterMarkup.textContent = decrement(Number(counterMarkup.textContent));
    
})

function increment(iter) { return iter += 1;}
function decrement(iter) { return iter -= 1;}