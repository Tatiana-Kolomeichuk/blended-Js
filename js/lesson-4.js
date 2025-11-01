// 1 - отримай body елемент і виведи його в консоль;
const body=document.querySelector('body');
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataElements = document.querySelectorAll('[data-topic]');
console.log(dataElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElement = dataElements[0];
console.log(firstElement);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElement = dataElements[dataElements.length - 1];
console.log(lastElement);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titles = document.querySelector('h1');
const neighbor = titles.nextElementSibling;
console.log(neighbor);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titleThird = document.querySelectorAll("h3");
console.log(titleThird);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titleThird.forEach(el => {
  el.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navLi = document.querySelector('li[data-topic="navigation"]');
console.log(navLi);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
if (navLi) navLi.style.backgroundColor = 'yellow'
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navP = navLi.querySelector('p');
navP.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentElement = document.querySelector(`li[data-topic="${currentTopic}"]`);
console.log(currentElement);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
if (currentElement) {
  currentElement.style.backgroundColor = 'lightblue';
}
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompleted = document.querySelector(".completed")
console.log(titleCompleted);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const liToRemove = titleCompleted.closest('li');
liToRemove.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const titleFirst = document.querySelector('h1');
const newPar = document.createElement('p');
newPar.textContent = "Об'єктна модель документа (Document Object Model)";
titleFirst.insertAdjacentElement('afterend', newPar);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const lists = document.querySelector('.list');

const newLi = document.createElement('li');
newLi.setAttribute('data-topic', 'innerhtml');

const newH3 = document.createElement('h3');
newH3.textContent = 'Властивість innerHTML';

const newP = document.createElement('p');
newP.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

newLi.append(newH3, newP);
lists.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const listLast = document.querySelector('.list');

listLast.insertAdjacentHTML(
  'beforeend',
  `
  <li data-topic="innerhtml-template">
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
  `
);
// 20 - очисти список
const listAll = document.querySelector('.list');
listAll.innerHTML = '';


// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainer = document.querySelector(".number-container");
const elem = [];
for (let i = 0; i < 100; i++){
    const numDiv = document.createElement('div');
    numDiv.classList.add('number');
    const randomNum=randomNumber()
    numDiv.textContent = randomNum;
    if (randomNum % 2 === 0) {
        numDiv.classList.add('even')
    }
    else{numDiv.classList.add('odd')}
    elem.push(numDiv);
}
numberContainer.append(...elem);
console.log(elem);


// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector('.js-username-input');

input.addEventListener('input', () => {
  const value = input.value.trim();

  if (value.length > 6) {
    input.classList.add('success');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('success');
  }
});
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener('focus', () => {
  const value = input.value.trim();

  if (value === '') {
    input.style.outline = '3px solid red';
  } else {
    input.style.outline = '3px solid green';
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


input.addEventListener('blur', () => {
  const value = input.value.trim();

  if (value === '') {
    input.style.outline = '3px solid red';
  } else {
    input.style.outline = '3px solid lime';
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('.js-contact-form');
const checkbox = document.querySelector('.js-policy-checkbox');
const output = document.querySelector('.js-username-output');

input.addEventListener('input', () => {
  const val = input.value.trim();
  output.textContent = val || 'Anonymous';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const userName = input.value.trim();
    const accepted = checkbox.checked;

    if (!userName) {
        alert('Будь ласка, введіть ім’я.');
        return;
    }
    if (!accepted) {
        alert('Потрібно погодитися з політикою конфіденційності.');
        return;
    }

    const data = { userName };
    console.log('Form data:', data);
    form.reset();
});


// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');
const box = document.querySelector('.box');

let sizes = 50;

decreaseBtn.addEventListener('click', () => { 
    sizes -= 20;
    box.style.width = `${sizes}px`
      box.style.height= `${sizes}px`
});

increaseBtn.addEventListener('click', () => { 
sizes += 20;
    box.style.width = `${sizes}px`
      box.style.height= `${sizes}px`
});




