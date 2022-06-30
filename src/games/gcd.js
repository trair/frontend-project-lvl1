import getRandomNumber from '../getRandomNumber.js';

import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const isGCD = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return isGCD(num2, num1 % num2);
};

const getGameData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(isGCD(num1, num2));
  return [question, correctAnswer];
};

const startGCDGame = () => {
  runEngine(description, getGameData);
};
export default startGCDGame;
