import getRandomNumber from '../utils.js';

import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const progression = (firstNumber, step, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

const getGameData = () => {
  const length = getRandomNumber(10, 20);
  const firstNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progressionValue = progression(firstNumber, step, length);
  const hiddenNumber = getRandomNumber(1, progressionValue.length - 1);
  const correctAnswer = String(progressionValue[hiddenNumber]);
  progressionValue[hiddenNumber] = '..';
  const question = progressionValue.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  runEngine(description, getGameData);
};
export default startProgressionGame;
