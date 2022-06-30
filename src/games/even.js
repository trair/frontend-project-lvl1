import getRandomNumber from '../getRandomNumber.js';

import runEngine from '../index.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => {
  runEngine(description, getGameData);
};
export default startEvenGame;
