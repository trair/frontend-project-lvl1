import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const startGame = () => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  const even = (num) => num % 2 === 0;

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNum();
    const answer = even(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    if (userAnswer === answer) {
        console.log(`Correct!`);
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
        console.log(`Let's try again, ${userName}!`);
        return;
    }
  }

  console.log(`Congratualtions, ${userName}!`);
};

export default startGame;