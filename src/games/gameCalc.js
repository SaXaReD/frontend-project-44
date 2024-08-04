import { getRandomNumbers, getRandomSymbol } from '../randomnumbers.js';
import startGame from '../index.js'

const descriptionGame = () => {
    const description = 'What is the result of the expression?';
    return description;
};

const brainCalc = () => {
    let randomNumbers = getRandomNumbers();
    let randomSymbol = getRandomSymbol();
    let correctAnswer = 0;
    if (randomSymbol === '+') {
        correctAnswer = randomNumbers[0] + randomNumbers[1];
    } else if (randomSymbol === '-') {
        correctAnswer = randomNumbers[0] - randomNumbers[1];
    } else {
        correctAnswer = randomNumbers[0] * randomNumbers[1];
    }
    console.log(`Question: ${randomNumbers[0]} ${randomSymbol} ${randomNumbers[1]}`);
    return correctAnswer.toString();
};

export default () => {
    startGame(brainCalc, descriptionGame)
};