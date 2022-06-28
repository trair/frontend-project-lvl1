import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const operators = ['-', '+', '*'];

const startGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const calculate = (num1, num2, operator) => {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          return false;
      }
    };

    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const operator = operators[i];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calculate(num1, num2, operator));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
