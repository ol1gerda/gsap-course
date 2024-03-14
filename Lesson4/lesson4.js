// let titleProject = 'Оценка стоимости проекта: ';
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 10000;
let percentage = 10;
// let fullPrice = 100000;
// let responsive = true;

// Урок 4. Задание 1-3.

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями?');
let responsive = confirm('Нужна ли адаптивность?');


// Урок 4. Задание 4.

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');


// Урок 4. Задание 5.

let fullPrice = screenPrice + servicePrice1 + servicePrice2;


// Урок 4. Задание 6.

let servicePercentPrice = Math.round( fullPrice - (fullPrice * percentage / 100) );


// Урок 4. Задание 7.

// Если fullPrice больше 50000, тогда сделаем скидку в 10% (пока просто текст в консоль выводите)
// Если fullPrice больше 20000 и меньше 50000, выводим в консоль текст: сделаем скидку 5%
// Если fullPrice меньше 20000 и больше 0, то скидка не предусмотрена
// Если отрицательное значение то вывести “Что то пошло не так”
// Не забудьте учитывать варианты, если цена равна 0, 20000, 50000 (в консоль вывести любой текст по желанию)

if (fullPrice >= 50000) {
    result = 'сделаем скидку в 10%';
  } else if (fullPrice >= 20000 && fullPrice < 50000) {
    result = 'сделаем скидку в 5%';
  } else if (fullPrice >= 0 && fullPrice < 20000) {
    result = 'скидка не предусмотрена';
  } else if (fullPrice < 0) {
    result = 'что-то пошло не так';
  }


console.log(titleProject, screensValue, responsive, 
    service1, servicePrice1, service2, servicePrice2, 
    fullPrice, servicePercentPrice, result);


