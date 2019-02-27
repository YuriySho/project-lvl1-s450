import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = num => num % 2 === 0;

const attemptLimit = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const askName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${askName}`);
  const answer = (counter) => {
    if (counter === attemptLimit) {
      console.log(`Congratulations, ${askName}`);
      return true;
    }
    const number = getRandom(1, 100);
    console.log(`Question: ${number}`);
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const getAnswerUser = readlineSync.question('Your answer: ');
    if (rightAnswer === getAnswerUser) {
      console.log('Correct!');
      return answer(counter + 1);
    }
    console.log(`'${getAnswerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${askName}!`);
    return false;
  };
  return answer(0);
};
