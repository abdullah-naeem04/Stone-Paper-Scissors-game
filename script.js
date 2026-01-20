let userChoice = 0;
let compChoice = 0;
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#userScore");
const compScoreCount = document.querySelector("#compScore");



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute ("id");
        playGame(userChoice);
    });
})

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log ("User Choice =", userChoice );
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice );
    
    const gameDraw = () => {
        console.log("Game was draw.");
        msg.innerText = `Game was draw. Play Again!`;
        msg.style.backgroundColor = "navy"
    };
    
    const showWinner = (userWin) => {
        if( userWin == true) {
            userScore++;
            userScoreCount.innerText = userScore;
            console.log(userScore);
            console.log("You Win");
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
        else {
            compScore++;
            compScoreCount.innerText = compScore;
            console.log(compChoice);
            console.log("You Lose")
            msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
            msg.style.backgroundColor = "red";
        }
    }
    
    if(userChoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if(compChoice === "paper") {
                userWin = false;
            }
            else if (compChoice === "scissor") {
                userWin = true;
            }
        }

        else if (userChoice === "paper") {
            if(compChoice === "scissor") {
                userWin = false;
            }
            else if (compChoice === "rock") {
                userWin = true;
            }
        }
        
        else if (userChoice === "scissor") {
            if(compChoice === "rock") {
                userWin = false;
            }
            else if (compChoice === "paper") {
                userWin = true;
            }
        }
        showWinner(userWin);
    }

};