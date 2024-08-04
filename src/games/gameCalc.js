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
    let question = `${randomNumbers[0]} ${randomSymbol} ${randomNumbers[1]}`;
    if (randomSymbol === '+') {
        correctAnswer = randomNumbers[0] + randomNumbers[1];
    } else if (randomSymbol === '-') {
        if (randomNumbers[0] > randomNumbers[1]) {
            correctAnswer = randomNumbers[0] - randomNumbers[1];
        } else {
            question = `${randomNumbers[1]} ${randomSymbol} ${randomNumbers[0]}`;
            correctAnswer = randomNumbers[1] - randomNumbers[0];
        }
    } else {
        correctAnswer = randomNumbers[0] * randomNumbers[1];
    }
    console.log(`Question: ${question}`);
    return correctAnswer.toString();
};

export default () => {
    startGame(brainCalc, descriptionGame)
};