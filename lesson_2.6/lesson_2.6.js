const gameBotFunction = function () {
  let answerNum = '';
  let attempts = 3;
  

  function randomGenerate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  let mysteryNumber = randomGenerate(0, 100);
  console.log(mysteryNumber);
 
  let checkIsNumber = function(num) {
     return !isNaN(parseFloat(num)) && isFinite(num) || num.trim() === '' 
     }
   
  return function getResult() {
      answerNum = prompt("Угадайте число от 0 до 100");
      if (answerNum === null) {
        alert ('Вы завершили игру')
        return
      }

    while (!checkIsNumber(answerNum)){
      alert('Вы ввели неверное значение, введите цифру. ')
      answerNum = prompt("Угадайте число от 0 до 100");
    }

    answerNum = Number(answerNum)


    if (mysteryNumber > answerNum) {
      alert('Ваше число меньше загаданного. Попробуйте еще.\nОсталось попыток: ' + attempts);
     
   } else if (mysteryNumber < answerNum) {    
      alert('Ваше число больше загаданного. Попробуйте еще.\nОсталось попыток: ' + attempts);
  
   } else if (mysteryNumber === answerNum) {   
      let newGame = confirm('Вы угадали! Хотите сыграть еще раз?');
      if (newGame) {
        attempts = 3
        mysteryNumber = randomGenerate(0, 100)
      } else {
        attempts = 0;
      }
     
     }

  if (attempts > 0) {
    attempts--
    getResult();
  } else {
    let maybeAgain = confirm('Игра окончена. Сыграем еще раз?')
    if (maybeAgain) {
      attempts = 3;
      getResult();
    } else {
      alert('Спасибо за игру.')
      return
    }
  }
    }
  
}
let launchGameBot = gameBotFunction();
launchGameBot();