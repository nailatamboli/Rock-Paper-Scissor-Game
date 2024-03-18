let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".msg-container");

const drawGame = () => {
    msg.innerText = `Game was Draw. Play Again.`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(compChoice === userChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === Rock){
            userWin = compChoice === "Paper" ? false : true ;
        }else if(userChoice === Paper){
            userWin = compChoice === "Scissors" ? false : true ;
        }else{
            userWin = compChoice === "Rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const genCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissors"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
