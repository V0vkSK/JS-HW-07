// Задание 2
// В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

// Создание карточки
const CreateProduct = product =>  {
  const liElementRef = document.createElement('li');
  liElementRef.textContent = [product];
   
  return liElementRef;
};
// ---------------

// Создаем массив li созданных выше
const ingredientsRef = ingredients.map(product => CreateProduct(product));

// Вкладываем в ul
ulRef.append(...ingredientsRef);
  

