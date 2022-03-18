const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['Rock', 'Paper', 'Scissors']
let userChoice

const handleClick = (e) =>{
  userChoice = e.target.id; 
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];  // uses math.random and math.floor to get a random number between 0 and 2, this. then selects the corresponding array choice
  computerChoiceDisplay.innerHTML = randomChoice 
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] 
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}

