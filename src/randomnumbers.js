export default () => {
    const randomNumbers = [];
    randomNumbers[0] = Math.round(Math.random(1) * 99) + 1;
    randomNumbers[1] = Math.round(Math.random(1) * 99) + 1;
    return randomNumbers;
};