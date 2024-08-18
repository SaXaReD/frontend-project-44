import readlineSync from 'readline-sync';
import welcome from './greet.js';

const roundsCount = 3;

const startGame = (getGame, description) => {
  const greet = welcome();
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = getGame();
    console.log(`Question: ${gameData[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== gameData[0].toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData[0]}'.`);
      console.log(`Let's try again, ${greet}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${greet}!`);
};

export default startGame;
