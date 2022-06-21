import readlineSync, { question } from 'readline-sync';

const getRandomNum = () => Math.round(Math.random() * 100);

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  const even = (num) => num % 2 === 0;

  const getAnswer = () => {
    const question = getRandomNum();
    const answer = even(question) ? 'yes' : 'no';
  }

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    if (userAnswer === answer) {
        console.log(`Correct!`);
    }
  }
};
