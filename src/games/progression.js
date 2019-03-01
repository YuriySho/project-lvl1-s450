import gameEngine from '..';
import getRandom from '../utils';

const rule = 'What number is missing in the progression?';

const getGameData = () => {
  const arr = [];
  const maxValueIndex = 9;
  const firstNum = getRandom(0, 10);
  const stepProgression = getRandom(1, 10);
  const hiddenElementINdex = getRandom(1, maxValueIndex);
  const iter = (i, num, acc) => {
    if (i > maxValueIndex) {
      return acc;
    }
    return iter(i + 1, num + stepProgression, acc.concat(num));
  };
  const rightAnswer = (firstNum + stepProgression * hiddenElementINdex).toString();
  const arrNum = iter(0, firstNum, arr);
  const question = arrNum.map(elem => (elem === (arrNum[hiddenElementINdex]) ? '..' : elem)).join(' ');
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
