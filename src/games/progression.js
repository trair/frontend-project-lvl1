import getRandomNumber from '../utils.js';

import runEngine from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstNumber, step, progressionLength) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(10, 20);
  const firstNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progressionValue = makeProgression(firstNumber, step, progressionLength);
  const hiddenIndex = getRandomNumber(1, progressionValue.length - 1);
  const correctAnswer = String(progressionValue[hiddenIndex]);
  progressionValue[hiddenIndex] = '..';
  const question = progressionValue.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  runEngine(description, generateRound);
};
export default startProgressionGame;
