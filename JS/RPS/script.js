const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const result = document.getElementById('Result')
var ComputerChoice
var playerChoice
var gameOutcome = ''

paper.onclick= () => {
    playerChoice = 'paper';
    console.log(playerChoice)
    getComputerChoice()
    console.log(ComputerChoice)
    gameOutCome()
    console.log(gameOutcome)
    
}
rock.onclick= () => {
    playerChoice = 'rock';
    console.log(playerChoice)
    getComputerChoice()
    console.log(ComputerChoice)
    gameOutCome()
    console.log(gameOutcome)
    
}
scissors.onclick= () => {
    playerChoice = 'scissors';
    console.log(playerChoice)
    getComputerChoice()
    console.log(ComputerChoice)
    gameOutCome()
    console.log(gameOutcome)
    
}


function getComputerChoice(){
    min = Math.ceil(1);
    max = Math.floor(3);
    let compChoiceNum = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is 
    console.log(compChoiceNum)
    if(compChoiceNum <= 1){
        ComputerChoice = 'paper'
    }
    else if(compChoiceNum <= 2){
        ComputerChoice = 'rock'
    }
    else if(compChoiceNum <= 3){
        ComputerChoice = 'scissors'
    }
}
function gameOutCome(){
    if(ComputerChoice == playerChoice){
        gameOutcome = 'draw'
        result.style.color = 'white'
        result.textContent = 'DRAW'
    }
    else if((ComputerChoice == 'scissors' && playerChoice == 'rock') || (ComputerChoice == 'paper' && playerChoice == 'scissors') ||  (ComputerChoice == 'scissors' && playerChoice == 'rock')){
        gameOutcome = 'win'
        result.style.color = 'lightgreen'
        result.textContent = 'You won'
    }
    else if((ComputerChoice == 'rock' && playerChoice == 'scissors') || (ComputerChoice == 'paper' && playerChoice == 'rock') ||  (ComputerChoice == 'scissors' && playerChoice == 'paper')){
        gameOutcome = 'lose'
        result.style.color = 'red'
        result.textContent = 'You Lost'
    }
}

    