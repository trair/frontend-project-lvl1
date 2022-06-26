import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log(`Find the greatest common divisor of given numbers.`);

    for (let i = 0; i < 3; i += 1) {
        const num1 = getRandomNum();
        const num2 = getRandomNum();
        const question = `${num1} ${num2}`;
        const answer = num1 % num2;
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
    console.log(`Congratualtions ${userName}!`);
  };
  
  export default startGame;