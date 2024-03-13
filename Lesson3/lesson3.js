let titleProject = 'Оценка стоимости проекта: ';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 10000;
let percentage = 10;
let fullPrice = 100000;
let responsive = true;

// Урок 4. Задание 1-3.

// let first = prompt('Название проекта?');
// let res = titleProject + first;
// let second = prompt('Уровень сложности?');
// screensValue = second;
// let third = prompt ('Нужна ли адаптивность?');
// responsive = third;


// Урок 4. Задание 4.

let firstq = prompt('Какой сервис нужен?');
let service1 = firstq;
let secondq = prompt('Сколько это будет стоить?');
let servicePrice1 = +secondq;
let thirdq = prompt ('Какой еще сервис тебе нужен?');
let service2 = thirdq;
let fourthq = prompt ('Сколько будет стоить этот второй сервис?');
let servicePrice2 = +fourthq;


// Урок 4. Задание 5.

let fullPrice1 = screenPrice + servicePrice1 + servicePrice2;


// Урок 4. Задание 6.

let servicePercentPrice = Math.round( fullPrice1 - (fullPrice1*0.15) );


// Урок 4. Задание 7.

// Если fullPrice больше 50000, тогда сделаем скидку в 10% (пока просто текст в консоль выводите)
// Если fullPrice больше 20000 и меньше 50000, выводим в консоль текст: сделаем скидку 5%
// Если fullPrice меньше 20000 и больше 0, то скидка не предусмотрена
// Если отрицательное значение то вывести “Что то пошло не так”
// Не забудьте учитывать варианты, если цена равна 0, 20000, 50000 (в консоль вывести любой текст по желанию)

if (fullPrice1 >= 50000) {
    result = 'сделаем скидку в 10%';
  } else if (fullPrice1 >= 20000 && fullPrice1 < 50000) {
    result = 'сделаем скидку в 5%';
  } else if (fullPrice1 >= 0 && fullPrice1 < 20000) {
    result = 'скидка не предусмотрена';
  } else if (fullPrice1 < 0) {
    result = 'что-то пошло не так';
  }


console.log(fullPrice1, result);


