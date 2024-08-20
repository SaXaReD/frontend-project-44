import getRandomNum from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRandomNum(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [correctAnswer, num];
};

export default () => {
  startGame(getRound, descriptionGame);
};
