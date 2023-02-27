import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let rounds = 1;
let game = true;

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound() {
  const secretNumber = generateRandomNumber(1, 10);
  console.log(`Round ${rounds}`);
  rl.question('Guess the number (between 1 and 10): ', (answer: string) => {
    const guess = parseInt(answer);
    if (guess === secretNumber) {
      console.log('Congratulations, you guessed the number!');
      score += 10;
    } else {
      console.log(`Sorry, the number was ${secretNumber}`);
    }
    console.log(`Your score is ${score}`);
    rounds++;
    if (rounds > 3) {
      console.log('Game over!');
      console.log(`Final score: ${score}`);
      rl.close();
      game = false;
    } else {
      playRound();
    }
  });
}

playRound();
