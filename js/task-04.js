// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//
let counterValue = 0;

const ref = {
    buttonDecrement: document.querySelector('.decrement'),
    buttonIncrement: document.querySelector('.increment'),
    htmlCounterValue: document.querySelector('#value'),
}

function increment() {
    counterValue += 1;
    render();
}

function decrement() {
    counterValue -= 1;
    render();
}
function render() {
    ref.htmlCounterValue.textContent = counterValue;
}
 
ref.buttonDecrement.addEventListener('click', decrement);
ref.buttonIncrement.addEventListener('click', increment);