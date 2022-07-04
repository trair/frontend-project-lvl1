import getRandomNumber from '../utils.js';

import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const startCalculatorGame = () => {
  runEngine(description, generateRound);
};

export default startCalculatorGame;
