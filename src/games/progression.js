import gameEngine from '..';
import getRandom from '../utils';

const rule = 'What number is missing in the progression?';

const getGameData = () => {
  const firstNum = getRandom(0, 10);
  const stepProgression = getRandom(1, 10);
  const indexHiddenNum = getRandom(1, 9);
  const iter = (i, num, acc) => {
    if (i > 9) {
      return acc;
    }
    return iter(i + 1, num + stepProgression, acc.concat(num));
  };
  const rightAnswer = firstNum + stepProgression * indexHiddenNum;
  const arrNum = iter(0, firstNum, arr);
  const question = arrNum.map(elem => (elem === (arrNum[indexHiddenNum]) ? '..' : elem));
  return [question, rightAnswer.toString()];
};

export default () => gameEngine(rule, getGameData);
