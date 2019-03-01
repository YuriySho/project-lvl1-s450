import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const getGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const rightAnswer = gcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
