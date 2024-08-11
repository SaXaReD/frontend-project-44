import readlineSync from 'readline-sync';
import welcome from './cli.js';

const roundCount = 3;
const name = welcome();

const startGame = (getGame, description) => {
  console.log(description());
  for (let i = 0; i < roundCount; i += 1) {
    const correctAnswer = getGame();
    const userInput = readlineSync.question('Your answer: ');
    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
