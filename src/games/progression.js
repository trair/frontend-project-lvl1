import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const startGame = () => {
  console.log('What number is missing in the progression?');
  const isProg = (start, length, counter) => {
    const result = [];
    for (let i = 0; i < length; i += 1) {
      result.push(start + counter * i);
    }
    return result;
  };
  const missingElement = (progression, item) => {
    const newProg = progression.slice(0);
    const newItem = item;
    newProg[newItem] = '..';
    return newProg.join(' ');
  };
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum(1, 10);
    const randomStep = getRandomNum(1, 5);
    const progLength = getRandomNum(5, 10);
    const randomElement = getRandomNum(1, progLength);
    const progression = isProg(num1, progLength, randomStep);
    const question = missingElement(progression, randomElement);
    const deliteElement = num1 + (randomStep * randomElement);
    const answer = String(deliteElement);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer  ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
