import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
