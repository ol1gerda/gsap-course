let screenPrice = 10000;
let percentage = 10;
let allServicePrices = 0;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let fullPrice;
let servicePercentPrice;




const asking = function() {
  titleProject = prompt ('Название проекта?')
  screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями?')
  responsive = prompt ('Нужна ли адаптивность на сайте?')
 
}


function checkIsNumber() {
  let num;

   while ( isNaN(parseFloat(num)) && !isFinite(num) || num === null || num === '') {
  num = prompt("Сколько это будет стоить?");
     }
  return +num;

}


const getAllServicePrices = function(){
  
  const n = 2;
  for (let i = 1; i <= n; i++) {
    textFromPrompt = checkIsNumber();
  
    allServicePrices += textFromPrompt;
    
  }
  }

  
const getFullPrice = function() {
  return allServicePrices + screenPrice;
}


const getServicePercentPrices = function() {
  return  fullPrice - (fullPrice * (percentage / 100)) ;
}




const getTitle = function() {
  titleProject = titleProject.trim();
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}


asking()
let service1 = prompt('Какой сервис нужен?')
// let service2 = prompt('Какой еще сервис тебе нужен?')
getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = Math.round(getServicePercentPrices());
newTitle = getTitle();



console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service1);
// console.log(service2);
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);

let getRollbackMessage;

  if (fullPrice >= 50000) {
      getRollbackMessage = function() {
      console.log('сделаем скидку в 10%');
    }
  } else if (fullPrice >= 20000 && fullPrice < 50000) {
    getRollbackMessage = function() {
      console.log('сделаем скидку в 5%');
    }
  } else if (fullPrice >= 0 && fullPrice < 20000) {
    getRollbackMessage = function() {
      console.log('скидка не предусмотрена');
    }
  } else if (fullPrice < 0) {
    getRollbackMessage = function() {
      console.log('что-то пошло не так');
}
}
getRollbackMessage();
