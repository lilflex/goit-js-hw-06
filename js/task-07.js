
const inputChange = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');
inputChange.addEventListener('input', (event)=>{
    const fontSize = event.currentTarget.value;
    abracadabra.style.fontSize = `${fontSize}px`;
})

// const inputChange = document.querySelector('input#font-size-control')
// const abracadabra = document.querySelector('span#text')

// inputChange.addEventListener('change', event => {
//     abracadabra.style.fontSize = `${event.target.value}px`
// })