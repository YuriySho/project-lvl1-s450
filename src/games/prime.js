import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, i) => {
  if (num < 2) {
    return false;
  }
  if (i === num) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  return isPrime(num, i + 1);
};

const getGameData = () => {
  const question = getRandom(-10, 100);
  const rightAnswer = isPrime(question, 2) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
