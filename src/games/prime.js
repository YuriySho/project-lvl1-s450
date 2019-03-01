import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const divider = (i) => {
    if (i >= num / 2) {
      return true;
    }
    if (num % i === 0) {
      return false;
    }
    return divider(i + 1);
  };
  return divider(2);
};

const getGameData = () => {
  const question = getRandom(-10, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
