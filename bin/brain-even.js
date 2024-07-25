import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log("Welcome to the Brain Games!");
let inputName = name();
console.log(`Hello, ${inputName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const checkNumbGame = () => {
    const maxGuesses = 3;
    for (let correctGuesses = 0; correctGuesses < maxGuesses;) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

        const userGuess = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

        if (userGuess !== 'yes' && userGuess !== 'no') {
            console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${inputName}!`)
            return;
        } else if (userGuess === correctAnswer) {
            console.log('Correct!');
            correctGuesses += 1; 
        } else {
            console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${inputName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${inputName}!`)
};

checkNumbGame();
