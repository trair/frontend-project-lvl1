import getRandomNumber from '../utils.js';

import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  if (number1 === number2 || number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

const startGCDGame = () => {
  runEngine(description, generateRound);
};
export default startGCDGame;
