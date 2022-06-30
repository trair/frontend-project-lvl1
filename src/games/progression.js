import getRandomNumber from '../getRandomNumber.js';

import game from '../index.js';

const description = 'What number is missing in the progression?';

const isProgression = (firstNumber, step, lengthOfProgression) => {
  const result = [];
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

const gameData = () => {
  const lengthOfProgression = getRandomNumber(10, 20);
  const firstNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = isProgression(firstNumber, step, lengthOfProgression);
  const hiddenNumber = getRandomNumber(1, 3);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  game(description, gameData);
};
export default startProgressionGame;
