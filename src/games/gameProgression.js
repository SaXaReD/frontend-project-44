import getRandomNum from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (num, step, length) => {
  const progression = [];
  for (let i = 0; i < step * length; i += step) {
    progression.push(num + i);
  }
  return progression;
};

const getRound = () => {
  const num1 = getRandomNum(1, 50);
  const step = getRandomNum(4, 16);
  const length = getRandomNum(5, 10);
  const progression = generateProgression(num1, step, length);
  const num2 = getRandomNum(1, progression.length - 1);
  const hideNumberProgression = Array.from(progression);
  hideNumberProgression[num2] = '..';
  const correctAnswer = progression[num2];
  const question = hideNumberProgression.join(' ');
  return [correctAnswer, question];
};

export default () => {
  startGame(getRound, descriptionGame);
};
