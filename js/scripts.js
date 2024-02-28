//randomly generates a selection of either rock, scissors, or paper to be compared to player choice

let playerChoice = '';
let playerScore = 0;
let compScore = 0;
let playCount = 0;
const buttons = document.querySelectorAll('button');
const activeRound = document.getElementById('round');
const playerScoreTrack = document.getElementById('player-score');
const compScoreTrack = document.getElementById('comp-score');
const playerPara = document.createElement('p');
const compPara = document.createElement('p');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playThrough(playerChoice);
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

function playThrough(playerSelection){
    if (playCount < 5) {
        activeRound.innerHTML = '';
        playerPara.innerHTML = '';
        compPara.innerHTML = '';
        playCount++;
        let computerSelection = getComputerChoice();
        const playerMsg = document.createTextNode(`Player selected: ${playerSelection}`);
        const compMsg = document.createTextNode(`Computer selected: ${computerSelection}`);
        playerPara.appendChild(playerMsg);
        compPara.appendChild(compMsg);
        activeRound.appendChild(playerPara);
        activeRound.appendChild(compPara);

        let results = [];
        currentLead = '';

        results = playBall(playerSelection, computerSelection);

        let resultsMsg = results[0];

        if (results[1] === 'player') {
            playerScore += 1;
            console.log('Player score increased by one.');
            playerScoreTrack.textContent = `${playerScore}`;
        } else if (results[1] === 'computer') {
            compScore += 1;
            console.log('Computer score increased by one.');
            compScoreTrack.textContent = `${compScore}`;
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
    } else {
        playCount = 0;
        compScore = 0;
        playerScore = 0

        playerScoreTrack.textContent = `${playerScore}`;
        compScoreTrack.textContent = `${compScore}`;

        if (currentLead === 'tie') {
            alert("No one wins.")
        } else {
            alert(`The victor is the ${currentLead}!`);
        }

        console.log("Resetting...")
    }   
}