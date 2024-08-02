import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const startGame = (gameData, descriptionGame) => {
    const name = welcome();
    console.log(descriptionGame());
    const maxGuesses = 3;
    for (let correctGuesses = 0; correctGuesses < maxGuesses;) {
        let correctAnswer = gameData();
        let userGuess = readlineSync.question(`Your answer: `);;
        if (userGuess === correctAnswer) {
            console.log('Correct!');
            correctGuesses += 1;
        } else {
            console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default startGame;

