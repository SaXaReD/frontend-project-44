import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrime = () => {
  const number = getRandomNumbers(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, number];
};

export default () => {
  startGame(getPrime, descriptionGame);
};
