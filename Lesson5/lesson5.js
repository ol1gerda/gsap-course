// Урок 2.5. Задание 1.

// 1. Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".
// Функция должна возвращать стоимость всех дополнительных услуг.
// Результат функции запиши в переменную allServicePrices.

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

console.log(service1, servicePrice1, service2, servicePrice2);

let allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
};

console.log('Стоимость дополнительных услуг:', allServicePrices());

// Урок 2.5. Задание 2.

// 2. Создай функцию getFullPrice с помощью метода "function declaration".
// Функция должна возвращать стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice )
// Результат функции запиши в переменную fullPrice.

let screenPrice = 10000;

function getFullPrice() {
  let fullPrice = allServicePrices() + screenPrice;
  return fullPrice;
};

console.log('Полная стоимость:', getFullPrice());

// Урок 2.5. Задание 3.

// 3. Создай функцию getTitle.
// Функция изменяет название проекта(titleProject), переводит первый символ в верхний регистр(делает заглавной),
// а остальные в нижний регистр(делает маленькими) и возвращает отредактированное название проекта (titleProject). 

let titleProject = prompt('Название проекта?');

function getTitle() {
  console.log('Название проекта:', titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase() );
  return titleProject;
}
getTitle();

// Урок 2.5. Задание 4.

// 4. Создай функцию getServicePercentPrices.
// Функция возвращает итоговую стоимость за вычетом процента подрядчику.
// Результат функции запиши в переменную servicePercentPrice

let percentage = 10;

function getServicePercentPrices() {
  let servicePercentPrice = Math.round( getFullPrice() - (getFullPrice() * percentage / 100) );
  return servicePercentPrice;
};

console.log('Полная стоимость за вычетом процента:', getServicePercentPrices());

// Урок 2.5. Задание 5.

// 5. Создай функцию getRollbackMessage.
// Функция считает и выводит в консоль значение скидки для клиента в зависимости от стоимости проекта.

let getRollbackMessage;

  if (getFullPrice() >= 50000) {
      getRollbackMessage = function() {
      console.log('сделаем скидку в 10%');
    }
  } else if (getFullPrice() >= 20000 && getFullPrice() < 50000) {
    getRollbackMessage = function() {
      console.log('сделаем скидку в 5%');
    }
  } else if (getFullPrice() >= 0 && getFullPrice() < 20000) {
    getRollbackMessage = function() {
      console.log('скидка не предусмотрена');
    }
  } else if (getFullPrice() < 0) {
    getRollbackMessage = function() {
      console.log('что-то пошло не так');
}
}
getRollbackMessage();