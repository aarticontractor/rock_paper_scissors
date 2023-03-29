// defined variables
let wins = 0;
let ties = 0;
let losses = 0;
let  playAgain = true;

// defined a while loop inside a function
function playGameAgain() {
while (playAgain) {
                
                const options = ['rock', 'paper', 'scissors'];


                // used math.random method to generate random answers for computer choice
                const computerChoice = options[Math.floor(Math.random() * 3)]; 

                //   defined user choice
                const userChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();

                // if the user doesn't enter a valid option it will be alerted
                if (!options.includes(userChoice)) {
                    alert('Please choose a valid option.');
                    continue;
                }

                if (userChoice === computerChoice) {
                    alert(`It's a tie! You both chose ${userChoice}.`);
                    ties++;
                } else if (
                    (userChoice === 'rock' && computerChoice === 'scissors') ||
                    (userChoice === 'paper' && computerChoice === 'rock') ||
                    (userChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    alert(`You win! ${userChoice} beats ${computerChoice}.`);
                    wins++;
                } else {
                    alert(`You lose! ${computerChoice} beats ${userChoice}.`);
                    losses++;
                }
                // if user wins or loses it will be asked to confirm if wants to play again if no then it will be alerted
                const playAgainResponse = confirm(`Wins: ${wins}, Ties: ${ties}, Losses: ${losses}\nDo you want to play again?`);
                if (!playAgainResponse) {
                    alert('Thanks for playing!');
                    playAgain = false;
                }
}
}
// added event listener so that a function can be called when play game button is clicked a prompt appears
const playGame = document.getElementById("play");
console.log(playAgain);
playGame.addEventListener("click", function() {
    playAgain = true;
    console.log(playAgain);
    playGameAgain();
});