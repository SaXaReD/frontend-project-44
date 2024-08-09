import { getRandomNumbers } from '../randomnumbers.js';
import startGame from '../index.js';

const descriptionGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return description;
};

const brainEven = () => {
  const randomNumbers = getRandomNumbers(1, 100);
  let correctAnswer = 'yes';
  if (randomNumbers % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question: ${randomNumbers}`);
  return correctAnswer;
};

export default () => {
  startGame(brainEven, descriptionGame);
};
