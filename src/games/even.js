import getRandomNumber from '../getRandomNumber.js';

import game from '../index.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
  const question = getRandomNumber(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => {
  game(description, gameData);
};
export default startEvenGame;
