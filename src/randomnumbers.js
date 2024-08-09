export const getRandomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomSymbol = () => {
    const mathSymbol = "+-*";
    const randomIndex = Math.floor(Math.random() * mathSymbol.length);
    const randomSymbol = mathSymbol[randomIndex];
    return randomSymbol;
};