import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return description;
};

const generatePrime = (number) => {
  let isPrime = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const getPrime = () => {
  const num = getRandomNumbers(1, 100);
  const correctAnswer = generatePrime(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  return correctAnswer;
};

export default () => {
  startGame(getPrime, descriptionGame);
};
