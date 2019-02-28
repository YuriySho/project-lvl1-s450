import gameEngine from '..';
import getRandom from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandom(1, 100);
  const isEven = question % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
