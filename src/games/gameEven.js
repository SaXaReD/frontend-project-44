import getRandomNumbers from '../randomnumbers.js';

const descriptionGame = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    return description;
};

const brainEven = () => {
    const randomNumbers = getRandomNumbers();
    let isEven = true;
    let correctAnswer = 'yes';
    randomNumbers[0] % 2 === 0 ? isEven = true : isEven = false;
    isEven === true ? correctAnswer = 'yes' : correctAnswer = 'no';
    console.log('Question: ', randomNumbers[0])
    return correctAnswer;
};


export {
    brainEven,
    descriptionGame
};