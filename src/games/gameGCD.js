import { getRandomNumbers } from '../randomnumbers.js';
import startGame from '../index.js'

const descriptionGame = () => {
    const description = 'Find the greatest common divisor of given numbers.';
    return description;
};

const brainGCD = () => {
    const randomNumbers = getRandomNumbers(1, 100);
    let firstNumber = randomNumbers[0];
    let secondNumber = randomNumbers[1];
    let correctAnswer = '';
    console.log(`Question: `, firstNumber, secondNumber)
    for (; secondNumber !== 0;) {
        let temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
        correctAnswer = firstNumber;
    }
    return correctAnswer.toString();
};

export default () => {
    startGame(brainGCD, descriptionGame)
};