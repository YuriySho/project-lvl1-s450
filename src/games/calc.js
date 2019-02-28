import readlineSync from 'readline-sync';
import getRandom from '../utils';

const attemptLimit = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}`);
  const answer = (counter) => {
    if (counter === attemptLimit) {
      console.log(`Congratulations, ${nameUser}`);
      return undefined;
    }
    const arrOperations = ['+', '-', '*'];
    const randOperations = arrOperations[getRandom(0, 2)];
    const question1 = getRandom(1, 100);
    const question2 = getRandom(1, 100);
    let rightAnswer;
    console.log(`Question: ${question1} ${randOperations} ${question2}`);
    switch (randOperations) {
      case '+':
        rightAnswer = (question1 + question2).toString();
        break;
      case '-':
        rightAnswer = (question1 - question2).toString();
        break;
      case '*':
        rightAnswer = (question1 * question2).toString();
        break;
      default:
        rightAnswer = 0;
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return undefined;
    }
    console.log('Correct!');
    return answer(counter + 1);
  };
  answer(0);
};
