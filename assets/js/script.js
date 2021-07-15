function convert() {
    const input = document.querySelector('#input').value;
    if (input === '') return alert('Please enter a valid binary')
    input.split('').map(char => {
        if (char !== '0' && char !== '1') return alert('Please enter a valid binary');
    })
    const decimal = parseInt(input, 2);
    document.querySelector('#output').value = decimal;
    return true;
}

document.addEventListener('keyup', e =>{
    if(e.keyCode === 13) convert();
})