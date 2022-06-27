import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const startGame = () => {
    console.log(`Find the greatest common divisor of given numbers.`);

    for (let i = 0; i < 3; i += 1) {
        const num = getRandomNum();
        const num1 = getRandomNum();
        const question = `${num} ${num1}`;
        const answer = num % num1;
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        if (userAnswer === String(answer)) {
            console.log(`Correct!`);
        } else {
            console.log(`${userAnswer} is wrong answer  ;(. Correct answer was ${answer}`);
            console.log(`Let's try again, ${userName}`);
            return;
        }

    }
    console.log(`Congratulations, ${userName}!`);
  };
  
  export default startGame;