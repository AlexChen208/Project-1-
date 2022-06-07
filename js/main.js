// Overall Gameplay of Memory
    // Win/Loss logic  
        // Collect all pair of cards before the timer runs out
// TRY TO GET THE MVP (MINIMUM VIABLE PROJECT)
    // no need to make it fancy, need it to work


// 1) Define required constants
const colors = [
    'red',
    'green',
    'blue',
    'teal',
    'purple',
    'cyan',
    'yellow',
    'maroon'
]


// 2) Define required variables used to track the state of the game
    // Set timer to be 1 minute
    let timer

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const timerEl = document.getElementById('timer')
const cards = document.getElementById('container')

    // EventListner
cards.addEventListener('click', handleClick)
    // add a button to get the timer to start when you are ready
    // timerEl.addEventListener('click', startClick)

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
function initGame() {
    timer = getTimer()
    randomBoard()
}
// 	4.2) Render those values to the page
const startingMinute = 1
let time = startingMinute * 60
function getTimer() {
    // create timer to add onto the board
    const minute = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds: seconds
    timerEl.innerHTML = `${minute}:${seconds}`
    time--
}

function randomBoard() {
    // generate a board with different colors

}


// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking 2 cards
function startClick() {

}

function handleClick(evt) {
    console.log("IT IS WORKING!!")
}

setInterval(getTimer, 1000)
initGame()
