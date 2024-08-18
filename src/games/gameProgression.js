import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (number, step, length) => {
  const progression = [];
  for (let i = 0; i < step * length; i += step) {
    progression.push(number + i);
  }
  const num2 = getRandomNumbers(1, progression.length - 1);
  const result = progression[num2];
  const hideNumberProgression = progression;
  hideNumberProgression[num2] = '..';
  return [result, hideNumberProgression];
};

const getProgression = () => {
  let question = '';
  const num1 = getRandomNumbers(1, 100);
  const randomStep = getRandomNumbers(1, 5);
  const randomLength = getRandomNumbers(5, 10);
  const progression = generateProgression(num1, randomStep, randomLength);
  const correctAnswer = progression[0];
  question = progression[1].join(' ');
  return [correctAnswer, question];
};

export default () => {
  startGame(getProgression, descriptionGame);
};
