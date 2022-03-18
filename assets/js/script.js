
const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const player_Score = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, player_Score)

const choices = ['Rock', 'Paper', 'Scissors', 'Lizzard', 'Spock']
let userChoice
let computerChoice
let playerScore = 0;
let computerScore = 0;
let moves = 0;

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}


// Combine the two strings from the two possible choices and check them against the 9 possible scenarios, this will increase in the case of lizard and spock additions
const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'ScissorsPaper':
    case 'ScissorsLizzard':
    case 'PaperRock':
    case 'PaperSpock': 
    case 'RockScissors':
    case 'RockLizzard': 
    case 'LizzardPaper':
    case 'LizzardSpock': 
    case 'SpockScissors':
    case 'SpockRock':
      playerScore= playerScore + 1;
      resultDisplay.innerHTML = "YOU WIN!" //Prints out You Win for all cases where user choice defeats computer
      document.getElementById("player_Score").innerHTML = "Player Score:" + playerScore;

      break

    case 'PaperScissors':
    case 'PaperLizzard':
    case 'ScissorsRock':
    case 'ScissorsSpock':
    case 'RockPaper':
    case 'RockSpock':
    case 'LizzardScissors':
    case 'LizzardRock':
    case 'SpockPaper':
    case 'SpockLizzard':
      computerScore= computerScore + 1;
      resultDisplay.innerHTML = "YOU LOSE!" //Prints out You Lose for all cases where computer choice defeats computer
      document.getElementById("computer_Score").innerHTML = "Computer score:  " + computerScore;
      break

    case 'PaperPaper':
    case 'ScissorsScissors':
    case 'RockRock':
    case 'LizzardLizzard':
    case 'SpockSpock':
    
    resultDisplay.innerHTML = "ITS A DRAW!"// Where the answers are the same the computer displays "ITS A DRAW!"
    break
  }
}



