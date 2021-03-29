

// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div,
//     сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */}

// const ref = {
//     renderBtn: document.querySelector('[data-action="render"]'),
//     destroyBtn: document.querySelector('[data-action="destroy"]'),
//     numberValue: document.querySelector('#value'),
//     boxes: document.querySelector('#boxes'),

// }
// const boxes = document.createElement('div');
// boxes.classList.add('boxes');
// document.querySelector('#controls').appendChild(boxes);

// const input = document.querySelector('#controls').children[0];
// console.log(input.value);

// const createBtn = document.querySelector('[data-action="render"]');
// console.log(createBtn);

// const removeBtn = document.querySelector('[data-action="destroy"]');
// console.log(removeBtn);
// let boxQuantity;

// input.addEventListener('change', onValueInput);

// function onValueInput(event) {
//   // console.log(event.currentTarget.value);
//   boxQuantity = event.currentTarget.value;
//   console.log(boxQuantity);
//   return boxQuantity;
// }

// createBtn.addEventListener('click', () => createBoxes(boxQuantity));
// removeBtn.addEventListener('click', () => removeBoxes(boxQuantity));

// function createBoxes(amount) {
//   const box = document.createElement('div');
//   let width = 30;
//   let height = 30;
//   box.style.width = `${width}px`;
//   box.style.height = `${height}px`;
//   let x = Math.floor(Math.random() * 256);
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
//   if (amount === 1) {
//     // boxes.append(box);
//   }
//   if (amount >= 1) {
//     for (let i = 0; i <= amount; i += 1) {
//       width += 10;
//       height += 10;
//       boxes.append(box);
//     }
//   }
// }

// function removeBoxes() {
//   boxes.remove();
// }
//____________________VARIANT_____2


const refs = {
    controls: document.querySelector('#controls'),
    boxes: document.querySelector('#boxes'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroybtn: document.querySelector('[data-action="destroy"]'),
    input: document.querySelector('#controls>input')
}
console.log(refs.input);

refs.renderBtn.addEventListener('click', () => {
    const quantity = +refs.input.value;
    createBoxes(quantity);
});
const defaultSize = 30;

const createBoxes =(amount) => {
    destroyBoxes();
    for (let i = 0; i < amount; i++){
        const div = document.createElement('div');
        console.log(div);
        const size = defaultSize + i * 10;
        const color = randomColor();

        div.style.cssText = `width: ${size}px; height: ${size}px; background-color:${color}`
       refs.boxes.appendChild(div)

    }
    
}

const randomColor = () => {
    return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
}
const destroyBoxes = () => {
    boxes.innerHTML = "";
}
refs.destroybtn.addEventListener('click',destroyBoxes)


