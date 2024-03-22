let service1 = prompt('Какой сервис нужен?');
let service2 = prompt('Какой еще сервис тебе нужен?');
// let servicePrice1;
// let servicePrice2;


let num;
function checkIsNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

// while (servicePrice1 === num) {
//   servicePrice1 = +prompt('Сколько это стоит?');    
//   }
// while (servicePrice2 === num) {
//     servicePrice2 = +prompt('Сколько это стоит?');    
//   } 



let allServicePrices = 0;
let textFromPrompt = '';
const getAllServicePrices = function(){

  while (textFromPrompt === num) {
    return textFromPrompt;    
    }
  const n = 2;
  for (let i = 1; i <= n; i++) {
    textFromPrompt = +prompt(`Сколько это будет стоить?`);
  
    allServicePrices += textFromPrompt;
    
  }
  }

  getAllServicePrices();

  console.log(service1)
  console.log(service2)
  console.log(allServicePrices);