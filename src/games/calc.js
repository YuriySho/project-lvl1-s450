import gameEngine from '..';
import getRandom from '../utils';

const arrOperations = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const getGameData = () => {
  const randOperation = arrOperations[rand];
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const question = `${num1} ${randOperation} ${num2}`;
  let rightAnswer;
  switch (randOperation) {
    case '+':
      rightAnswer = (num1 + num2).toString();
      break;
    case '-':
      rightAnswer = (num1 - num2).toString();
      break;
    case '*':
      rightAnswer = (num1 * num2).toString();
      break;
    default:
      rightAnswer = 0;
  }
  return [question, rightAnswer];
};

export default () => gameEngine(rule, getGameData);
