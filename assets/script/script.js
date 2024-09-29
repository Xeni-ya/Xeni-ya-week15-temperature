// Создадим веб-страницу, на которой пользователь может ввести температуру для нескольких городов, после чего программа найдёт и выведет температуру в каждом городе, максимальную и минимальную температуру на странице.

// Алгоритм действий

// Создайте HTML-страницу, пусть на ней будет заголовок "Температура в разных городах"
// Создайте массив городов, например cities
// Создайте пустой массив, который будет хранить температуры для каждого города
// Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию prompt() или другие способы ввода данных пользователем
// Создайте список, в котором будет отображаться информация о каждом городе и его температуре. Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру.
// Найдите максимальную и минимальную температуру из массива с температурами. Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно.
// Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран


let cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];

for (let city of cities) {
  let temperature = parseFloat(prompt(`Введите температуру для города ${city}`));
  if (isNaN(temperature)){
  alert("Это не цифра :( Попробуйте снова.")
  }
  temperatures.push(temperature);
}

// const parentElement = document.getElementById('parent');
// const newElement = document.createElement('div');
// newElement.textContent = 'Новый элемент';
// parentElement.append(newElement);

let list = document.createElement('ul');
for (let i = 0; i < cities.length; i++) {
  const item = document.createElement('li');
  item.textContent = (`Температура в городе ${cities[i]}: ${temperatures[i]}°C`);
  list.append(item);
}

let maxTemperature = Math.max(...temperatures);
let minTemperature = Math.min(...temperatures);

const resultDiv = document.querySelector('.container');
resultDiv.append(list);

const innerDiv = document.querySelector('.inner');
const maxTemp = document.createElement('p');
maxTemp.textContent = (`Максимальная температура: ${maxTemperature}°C`);
innerDiv.append(maxTemp);

const minTemp = document.createElement('p');
minTemp.textContent = (`Минимальная температура: ${minTemperature}°C`);
innerDiv.append(minTemp);
