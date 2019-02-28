import readlineSync from 'readline-sync';

export default (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const nameUser = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${nameUser}`);
};
