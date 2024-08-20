import getRandomNum from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const correctAnswer = calculateExpression(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;
  return [correctAnswer, question];
};

export default () => startGame(getRound, descriptionGame);
