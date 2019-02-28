import readlineSync from 'readline-sync';

const attemptLimit = 3;

export default (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}`);
  const answer = (counter) => {
    if (counter === attemptLimit) {
      console.log(`Congratulations, ${nameUser}!`);
      return;
    }
    const [question, rightAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
    answer(counter + 1);
  };
  answer(0);
};
