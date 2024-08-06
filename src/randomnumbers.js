export const getRandomNumbers = (min, max) => {
    const randomNumbers = [];
    randomNumbers[0] = Math.round(Math.random(min) * max) + 1;
    randomNumbers[1] = Math.round(Math.random(min) * max) + 1;
    return randomNumbers;
};

export const getRandomSymbol = () => {
    const mathSymbol = "+-*";
    const randomIndex = Math.floor(Math.random() * mathSymbol.length);
    const randomSymbol = mathSymbol[randomIndex];
    return randomSymbol;
};