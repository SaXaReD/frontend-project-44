import { getRandomNumbers } from '../randomnumbers.js';
import startGame from '../index.js';

const descriptionGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return description;
};

const brainPrime = () => {
  const randomNumber = getRandomNumbers(1, 100);
  let isPrime = true;
  let correctAnswer = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
  isPrime === true ? correctAnswer = 'yes' : correctAnswer = 'no';
  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

export default () => {
  startGame(brainPrime, descriptionGame);
};
