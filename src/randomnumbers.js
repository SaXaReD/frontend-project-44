export const getRandomNumbers = () => {
    const randomNumbers = [];
    randomNumbers[0] = Math.round(Math.random(1) * 10) + 1;
    randomNumbers[1] = Math.round(Math.random(1) * 10) + 1;
    return randomNumbers;
};

export const getRandomSymbol = () => {
    const mathSymbol = "+-*";
    const randomIndex = Math.floor(Math.random() * mathSymbol.length);
    const randomSymbol = mathSymbol[randomIndex];
    return randomSymbol;
};