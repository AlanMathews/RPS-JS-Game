const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['Rock', 'Paper', 'Scissors', 'Lizzard']
let userChoice
let computerChoice

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
    case 'RockScissors':
    case 'PaperRock':
    case 'LizzardPaper':
    case 'ScissorsLizzard':
      resultDisplay.innerHTML = "YOU WIN!" //Prints out You Win for all cases where user choice defeats computer
      break

    case 'PaperScissors':
    case 'ScissorsRock':
    case 'RockPaper':
    case 'PaperLizzard':
    case 'LizzardScissors':
      resultDisplay.innerHTML = "YOU LOSE!" //Prints out You Lose for all cases where computer choice defeats computer
      break
      
    case 'PaperPaper':
    case 'ScissorsScissors':
    case 'RockRock':
    case 'LizzardLizzard':
    resultDisplay.innerHTML = "ITS A DRAW!"// Where the answers are the same the computer displays "ITS A DRAW!"
    break
  }
}