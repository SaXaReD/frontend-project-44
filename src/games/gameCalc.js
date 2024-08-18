import getRandomNumbers from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getOperator = (num1, num2) => {
  const operator = operators[getRandomNumbers(0, 2)];
  const minusPlus = operator === '-' ? num1 - num2 : num1 + num2;
  const checkOperators = operator === '*' ? num1 * num2 : minusPlus;
  return [checkOperators, operator];
};

const getCalc = () => {
  const num1 = getRandomNumbers(1, 20);
  const num2 = getRandomNumbers(1, 20);
  const expression = getOperator(num1, num2);
  const correctAnswer = expression[0];
  const question = `${num1} ${expression[1]} ${num2}`;
  return [correctAnswer, question];
};

export default () => startGame(getCalc, descriptionGame);
