import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const isGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return isGCD(num2, num1 % num2);
};

const startGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const question = `${num1} ${num2}`;
    const answer = isGCD(num1, num2);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer  ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
  }

  }
  console.log(`Congratulations, ${userName}!`);
};

  export default startGame;
