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
    let timer;

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const timerEl = document.getElementById('timer')
// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
function initGame() {
    timer = getTimer()
    randomBoard()
}
// 	4.2) Render those values to the page
function getTimer() {
    // create timer to add onto the board
}

function randomBoard() {
    // board will have different colors

}


// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking 2 cards
    // if cards matches, collect as a pair
    // else if cards don't match, card disappear
// 6) Handle a player clicking the replay button
    // reset the game






setInterval(getTimer, 1000)