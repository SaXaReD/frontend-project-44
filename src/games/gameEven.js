import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const descriptionGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return description;
};

const isEven = (number) => number % 2 === 0;

const getEven = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  return correctAnswer;
};

export default () => {
  startGame(getEven, descriptionGame);
};
