function checkIsNumber() {
  let answerNum;

   while ( isNaN(parseFloat(answerNum)) && !isFinite(answerNum) || answerNum === '') {
    answerNum = prompt("Угадайте число от 0 до 100");
    if (answerNum === null) {
      alert ('Вы завершили игру')
    }
     }
return +answerNum;

}
const userAttemptsCount = function(){
const n = 3;
for (let i = 1; i <= n; i++) {
  userAttempts = checkIsNumber();
}
}
userAttemptsCount();

// console.log()