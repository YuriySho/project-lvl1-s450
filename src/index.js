import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const actual = readlineSync.question('May I have your name?: ');

export default () => {
    console.log(`Hello, ${actual}`);
};
