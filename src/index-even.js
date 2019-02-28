import readlineSync from 'readline-sync';
import getRandom from './utils';

const isEven = num => num % 2 === 0;

const attemptLimit = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}`);
  const answer = (counter) => {
    if (counter === attemptLimit) {
      console.log(`Congratulations, ${nameUser}`);
      return undefined;
    }
    const question = getRandom(1, 100);
    console.log(`Question: ${question}`);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
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
