import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const generateGCD = (num1, num2) => {
  let correctAnswer = 0;
  let tempNum1 = num1;
  let tempNum2 = num2;
  while (tempNum2 !== 0) {
    const temp = tempNum2;
    tempNum2 = tempNum1 % tempNum2;
    tempNum1 = temp;
    correctAnswer = tempNum1;
  }
  return correctAnswer;
};

const getGCD = () => {
  const num1 = getRandomNumbers(1, 100);
  const num2 = getRandomNumbers(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = generateGCD(num1, num2);
  return [correctAnswer, question];
};

export default () => {
  startGame(getGCD, descriptionGame);
};
