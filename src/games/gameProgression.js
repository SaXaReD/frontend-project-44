import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const getProgression = () => {
  const arr1 = [];
  let question = '';
  const num = getRandomNumbers(1, 100);
  const num2 = getRandomNumbers(1, 5);
  const random = getRandomNumbers(5, 10);
  for (let i = 0; i < num2 * random; i += num2) {
    arr1.push(num + i);
  }
  const num1 = getRandomNumbers(1, arr1.length - 1);
  const correctAnswer = arr1[num1];
  const arr2 = arr1;
  arr2[num1] = '..';
  question = arr2.join(' ');
  console.log(`Question: ${question}`);
  return correctAnswer.toString();
};

const descriptionGame = () => {
  const description = 'What number is missing in the progression?';
  return description;
};

export default () => {
  startGame(getProgression, descriptionGame);
};
