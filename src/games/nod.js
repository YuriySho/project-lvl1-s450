import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return nod(b, a % b);
};
const getGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const rightAnswer = nod(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
