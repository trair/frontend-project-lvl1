import readlineSync from 'readline-sync';

import getRandomNum from '../getRandomNum.js';

import askNameAndGreet from '../cli.js';

const userName = askNameAndGreet();

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const startGame = () => {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

    for (let i = 0; i < 3; i += 1) {
        const question = getRandomNum();
        const answer = isPrime(question) ? 'yes' : 'no';
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        if (userAnswer === answer) {
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