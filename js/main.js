
/*----- constants -----*/
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
const board = document.getElementById('board')
const timerEl = document.getElementById('timer')
const readyButton = document.getElementById('readyButton')
const message = document.getElementById('message')
/*----- event listeners -----*/
board.addEventListener('click', flippedCard)
readyButton.addEventListener('click', getTimer)




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
        board.removeEventListener('click', flippedCard)
        if (firstClick.getAttribute('data-color') !== secondClick.getAttribute('data-color')) {
            setTimeout(function () {
                firstClick.classList.add('color-hidden')
                secondClick.classList.add('color-hidden')
                firstClick = ''
                secondClick = ''
                board.addEventListener('click', flippedCard)
            }, 1000)
        } else {
            firstClick.classList.add('matched')
            secondClick.classList.add('matched')
            firstClick = ''
            secondClick = ''
            board.addEventListener('click', flippedCard)
            combos++
            if (combos === 8) {
                endGame(true)
            }
        }
    }

}



function getTimer() {
    timerFun = setInterval(function () {
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
