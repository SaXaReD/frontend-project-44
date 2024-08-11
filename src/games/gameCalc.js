import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = () => {
  const description = 'What is the result of the expression?';
  return description;
};

const operators = ['+', '-', '*'];

const getCalc = () => {
  const num1 = getRandomNumbers(1, 20);
  const num2 = getRandomNumbers(1, 20);
  const operator = operators[getRandomNumbers(0, 2)];
  let correctAnswer = 0;
  let question = `${num1} ${operator} ${num2}`;
  switch (operator) {
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      if (num1 < num2) {
        question = `${num2} ${operator} ${num1}`;
        correctAnswer = num2 - num1;
        break;
      }
      correctAnswer = num1 - num2;
      break;
    default:
      console.log('Incorrect Symbol');
  }
  console.log(`Question: ${question}`);
  return correctAnswer.toString();
};

export default () => startGame(getCalc, descriptionGame);
