//Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.


const itemElement = document.querySelector('#categories');
const allLi = document.querySelectorAll('li.item');
// console.log(allLi);
console.log(`В списке ${allLi.length} категории.`);


// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега h2) и количество
// элементов в категории(всех вложенных в него элементов li).

// Категория: Животные
// Количество элементов: 4

allLi.forEach(el => {
    const category = el.querySelector('h2').textContent;
    const nameLi = el.querySelectorAll('li').length;
    // console.log(el.querySelector('h2').textContent);
    // console.log(el.querySelectorAll('li').length);
    console.log(`Категория: ${category} \nКоличество элементов: ${nameLi}`);
})




// const li = document.querySelectorAll('li.item')
// console.log(`В списке ${li.length} категории.`);

// li.forEach(el => {
//     const category = el.querySelector('h2').textContent;
//     // console.log(category);

//     const totalEl = el.querySelectorAll('li').length;
//     // console.log(toatlEl);

//     console.log(`Категория: ${category}  \nКоличество элементов: ${totalEl}`);
// })