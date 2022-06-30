import getRandomNumber from '../getRandomNumber.js';

import game from '../index.js';

const description = 'What is the result of the expression?';

const getCalculated = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

const gameData = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = String(getCalculated(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

const startCalculatorGame = () => {
  game(description, gameData);
};

export default startCalculatorGame;
