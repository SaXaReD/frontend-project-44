import readlineSync from 'readline-sync';

export default () => {
let inputName = readlineSync.question('May I have your name? ');
return inputName;
}
