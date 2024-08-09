import { getRandomNumbers } from '../randomnumbers.js';
import startGame from '../index.js'

const descriptionGame = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    return description;
};

const brainEven = () => {
    const randomNumbers = getRandomNumbers(1, 100);
    let isEven = true;
    let correctAnswer = 'yes';
    randomNumbers % 2 === 0 ? isEven = true : isEven = false;
    isEven === true ? correctAnswer = 'yes' : correctAnswer = 'no';
    console.log(`Question: ${randomNumbers}`)
    return correctAnswer;
};

export default () => {
    startGame(brainEven, descriptionGame)
};