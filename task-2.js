// В HTML есть пустой список ul#ingredients.

{/* <ul id="ingredients"></ul> */}
// В JS есть массив строк.


// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().




const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const showIngredients = document.querySelector('#ingredients');

const newEl = ingredients.map(el => {
    const newLi = document.createElement('li')
    newLi.textContent = el;
    showIngredients.appendChild(newLi)
    return newLi
})
console.log(newEl)


// titleEl.insertAdjacentHTML('afterbegin','<h2>Ингредиенты</h2>')
// titleEl.classList.add('item')
// // titleEl.textContent = 'Ингредиенты'
// // .insertAdjacentHTML("beforebegin",'html )
// console.log(titleEl);

const lastLi = document.createElement('li')
const titleEl = document.createElement('h2')
console.log(lastLi); 
lastLi.classList.add('item')

titleEl.textContent = 'Ингредиенты';
document.body.appendChild(lastLi)
lastLi.appendChild(titleEl)
lastLi.appendChild(showIngredients)
const navEl = document.querySelector('#categories')
navEl.appendChild(lastLi)



// document.newEl.appendChild(titleEl)
