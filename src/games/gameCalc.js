import { getRandomNumbers, getRandomSymbol } from '../randomnumbers.js';
import startGame from '../index.js'

const descriptionGame = () => {
    const description = 'What is the result of the expression?';
    return description;
};

const brainCalc = () => {
    let randomNumber1 = getRandomNumbers(1, 20);
    let randomNumber2 = getRandomNumbers(1, 20);
    let randomSymbol = getRandomSymbol();
    let correctAnswer = 0;
    let question = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    switch (randomSymbol) {
        case '*':
            correctAnswer = randomNumber1 * randomNumber2;
            break;
        case '+':
            correctAnswer = randomNumber1 + randomNumber2;
            break;
        case '-':
            if (randomNumber1 > randomNumber2) {
                correctAnswer = randomNumber1 - randomNumber2;
            } else {
                question = `${randomNumber2} ${randomSymbol} ${randomNumber1}`;
                correctAnswer = randomNumber2 - randomNumber2;
            }
            break;
    }
    console.log(`Question: ${question}`);
    return correctAnswer.toString();
};

export default () => {
    startGame(brainCalc, descriptionGame)
};