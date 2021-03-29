// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
    


/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

// = document.querySelectorAll('[data-action="expand"]');

// const showCounter = document.querySelector('#counter')

let btnPlus = document.querySelector('[data-action="increment"]')
let btnMinus = document.querySelector('[data-action="decrement"]')
let counterValueBtn = document.querySelector('#value')




let counterValue = 0;
const  btnPlusOnclick = function(){
    counterValue++;
    counterValueBtn.textContent = counterValue;
 };

const btnMinusOnclick = function () {
    counterValue--;
    counterValueBtn.textContent = counterValue;

}
btnPlus.addEventListener('click', btnPlusOnclick);
btnMinus.addEventListener('click', btnMinusOnclick);