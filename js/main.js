
/*----- app's state (variables) -----*/
// State - something that is always changing, something that the browser has to keep changing
let firstClick = ''
let secondClick = ''
let startingTime = 1
let time = startingTime * 60
let combos = 0
let timerFun = null
/*----- cached element references -----*/
// Using more than once
const boardEl = document.getElementById('board')
const timerEl = document.getElementById('timer')
const readyButton = document.getElementById('readyButton')
const message = document.getElementById('message')
/*----- event listeners -----*/
boardEl.addEventListener('click', flippedCard)
readyButton.addEventListener('click', getTimer)



/*----- functions -----*/  
function flippedCard(event) {
    if (event.target.className.includes('matched') || firstClick === event.target) {
        return
    }
    if (!firstClick) {
        firstClick = event.target
        firstClick.classList.remove('color-hidden')
    } else {
        secondClick = event.target
        secondClick.classList.remove('color-hidden')
        boardEl.removeEventListener('click', flippedCard)
        if (firstClick.getAttribute('data-color') !== secondClick.getAttribute('data-color')) {
            setTimeout(function () {
                firstClick.classList.add('color-hidden')
                secondClick.classList.add('color-hidden')
                firstClick = ''
                secondClick = ''
                boardEl.addEventListener('click', flippedCard)
            }, 1000)
        } else {
            firstClick.classList.add('matched')
            secondClick.classList.add('matched')
            firstClick = ''
            secondClick = ''
            boardEl.addEventListener('click', flippedCard)
            combos++
            if (combos === 8) {
                endGame(true)
            }
        }
    }
}

function getTimer() {
    timerFun = setInterval(function() {
        const minute = Math.floor(time / 60)
        let seconds = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        timerEl.innerHTML = `${minute}:${seconds}`
        time--
        if (time === -1) {
            endGame(false)
        }
    }, 1000)
}

function endGame(won) {
    if (won) {
        message.innerHTML = 'You won the game'
    } else {
        message.innerHTML = 'You lose'
    }
    clearInterval(timerFun)
    boardEl.removeEventListener('click', flippedCard)
}
 
 



// Create a function that checks for pairs
    // Grab firstClick and store value while revealing the color
    // Grab secondCLick and store the value while revealing the color
        // Also remove click function so that people can't spam any clicks
            // If colors don't match, bring back cover that hides the color 
                // 1) set up timer so that user has time to memorize the color 
                // 2) make sure to have clicks back to empty string so that value isn't stored at the same click
                // 3) enable click function again
            // else cards do match, have a class name matched to know that the cards do match
                // set clicks back to empty string, don't store previous data
                // enable click function
                // apply win/loss logic at the bottom to keep track of score   

// Create a timer for the game
    // Calculate the time that I want to show on the timer and how many seconds to go down at a time
    // If time reaches zero, end the game

//  Create win/loss logic
    // If won is true
        // Print winner
    // else 
        // print loser