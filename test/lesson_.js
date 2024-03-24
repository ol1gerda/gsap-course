let service1 = prompt('Какой сервис нужен?');
let allServicePrices = 0;

function checkIsNumber() {
  let num;

   while ( isNaN(parseFloat(num)) && !isFinite(num) || num === null || num === '') {
  num = prompt("Сколько это будет стоить?");
     }
  return +num;

}

// let ServicePrice = checkIsNumber();




const getAllServicePrices = function(){
  
  const n = 2;
  for (let i = 1; i <= n; i++) {
    textFromPrompt = checkIsNumber();
  
    allServicePrices += textFromPrompt;
    
  }
  }

  getAllServicePrices();

  console.log(service1)

  // console.log(`${checkIsNumber()}`);
  // console.log(ServicePrice);
  console.log(allServicePrices);