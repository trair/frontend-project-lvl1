import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const startGame = () => {
    console.log(`What number is missing in the progression?`);
    for (let i = 0; i < 3; i += 1) {
        const arr1 = [];
        const isProgression = () => {
        const num1 = getRandomNum();
        const random = Math.round(Math.random() * 5)
        const num3 = random + 1;
        for (let i = 0; i < num3 * 10; i += num3) {
            arr1.push(num1 + i);
        }
    
        return arr1;
        };
    
        isProgression();
    
        const getRandom = Math.round(Math.random() * 9);
        const num2 = getRandom;
        const answer = arr1[num2];
        const arr2 = arr1;
        arr2[num2] = '..';
        const question = arr2;

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        if (userAnswer === String(answer)) {
            console.log(`Correct!`);
        } else {
            console.log(`${userAnswer} is wrong answer  ;(. Correct answer was ${answer}`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};
  
  export default startGame;