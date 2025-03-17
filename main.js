let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const genCompChoice = () => {
    let compChoices = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return compChoices[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        document.getElementById('user-score').innerText = userScore;
        console.log("You Win");
    } else {
        compScore++;
        document.getElementById('comp-score').innerText = compScore;
        console.log("Comp Win");
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin); 
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})