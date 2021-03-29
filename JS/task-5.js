// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const ref = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
console.log(ref.input);
console.log(ref.output);

ref.input.addEventListener('focus', onInputFocus);
ref.input.addEventListener('blur', onInputBlur);

function onInputFocus() {
    console.log('Input got focus');
}
function onInputBlur() {
    console.log('Input lost focus');
}
ref.input.addEventListener('input',onInputChange )

const wordSpan = 'незнакомец';
ref.output.textContent = wordSpan;

function onInputChange(event) {
    
    console.log(event.currentTarget.value);
    // 
    if (event.currentTarget.value.length > 0) {
        ref.output.textContent = event.currentTarget.value;
    } else {
        ref.output.textContent = wordSpan
    }
}




