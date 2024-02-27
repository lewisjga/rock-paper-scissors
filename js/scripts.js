//randomly generates a selection of either rock, scissors, or paper to be compared to player choice

let playerChoice = '';
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playerChoice);
    })
})

function getComputerChoice(){
    let choice = ''
    let choiceCode = Math.floor(Math.random()*3);
    console.log(choiceCode);
    switch(choiceCode) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'scissors';
            break;
        case 2:
            choice = 'paper';
            break;
        default:
            console.log('Your code sucks');
            break;
    }
    return(choice); 
}

//compares the choices of the player against the choices of the computer to determine the outcome of a match

function playBall(choicePly, choiceCpu){
    choicePly = choicePly.toLowerCase();
    choiceCpu = choiceCpu.toLowerCase();
    let gameEndMsg = '';
    let victor = '';
    if (choicePly === 'rock') {
        switch(choiceCpu) {
            case 'rock':
                gameEndMsg = "It's a tie. You both picked rock.";
                victor = "tie";
                break;
            case 'scissors':
                gameEndMsg = "Rock beats scissors, you win!";
                victor = "player";
                break;
            case 'paper':
                gameEndMsg = "Paper beats rock, you lose!";
                victor = "computer";
                break;
            default:
                console.log("You messed up.");
                gameEndMsg = "oops";
                break;
        }
    }
    else if (choicePly === 'scissors') {
        switch(choiceCpu) {
            case 'rock':
                gameEndMsg = "Rock beats scissors, you lose!";
                victor = "computer";
                break;
            case 'scissors':
                gameEndMsg = "It's a tie. You both picked scissors.";
                victor = "tie";
                break;
            case 'paper':
                gameEndMsg = "Scissors beats paper, you win!";
                victor = "player";
                break;
            default:
                console.log("You messed up.");
                gameEndMsg = "oops";
                break;
        }
    } else if (choicePly === 'paper') {
        switch(choiceCpu) {
            case 'rock':
                gameEndMsg = "Paper beats rock, you win!";
                victor = "player";
                break;
            case 'scissors':
                gameEndMsg = "Scissors beats paper, you lose!";
                victor = "computer";
                break;
            case 'paper':
                gameEndMsg = "It's a tie. You both picked paper.";
                victor = "tie";
                break;
            default:
                console.log("You messed up.");
                gameEndMsg = "oops";
                break;
        }
    } else {
        console.log("The player did not choose a valid option.")
    }
    return[gameEndMsg, victor];
}

//Plays game through five times and declares a victor.

/*
function playThrough(playerSelection){
    let playerScore = 0;
    let compScore = 0;

    //game loop and scoring mechanism

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose your attack");
        console.log(`Computer selected: ${computerSelection}`);
        console.log(`Player selected: ${playerSelection}`);

        let results = [];
        currentLead = '';

        results = playBall(playerSelection, computerSelection);

        let resultsMsg = results[0];

        if (results[1] === 'player') {
            playerScore += 1;
            console.log('Player score increased by one.');
        } else if (results[1] === 'computer') {
            compScore += 1;
            console.log('Computer score increased by one.');
        } else if (results[1] === 'tie') {
            console.log('Tie, no change.');
        }

        if (playerScore > compScore) {
            currentLead = 'player';
        } else if (compScore > playerScore) {
            currentLead = 'computer';
        } else {
            currentLead = 'tie'
        }
    }  

    //track current leader/winner

    if (currentLead === 'tie') {
            return("No one wins.");
        } else {
            return(`The victor is the ${currentLead}!`);
        }

}

alert(playThrough());
*/