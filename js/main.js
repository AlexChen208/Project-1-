// // Overall Gameplay of Memory
//     // Win/Loss logic  
//         // Collect all pair of cards before the timer runs out
// // TRY TO GET THE MVP (MINIMUM VIABLE PROJECT)
//     // no need to make it fancy, need it to work


// // 1) Define required constants
// const colorsArr = [
//     'red',
//     'green',
//     'blue',
//     'teal',
//     'purple',
//     'cyan',
//     'yellow',
//     'maroon'
// ]


// // 2) Define required variables used to track the state of the game
//     // Set timer to be 1 minute

// // 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
// const timerEl = document.getElementById('timer')
// const board = document.getElementById('board')
// const cards = document.querySelector('.card')

//     // EventListner
// board.addEventListener('click', handleClick)

//     // add a button to get the timer to start when you are ready
//     // timerEl.addEventListener('click', startClick)

// // 4) Upon loading the app should:
// // 	4.1) Initialize the state variables
// function initGame() {
//     randomBoard()
// }
// // 	4.2) Render those values to the page


// function randomBoard() {
//     // generate a board with different colors
//     // Use the board container to generate random colors with color array 
//     // use math.random/math.floor
//     colorsArr.forEach(function(color) {
//         let randomPos = parseInt(Math.floor(Math.random() * 16))
//         color.sort = randomPos
//     })
// }


// // 	4.3) Wait for the user to click a square

// // 5) Handle a player clicking 2 cards


// function handleClick(evt) {
//     console.log(evt.target)
// }


// initGame()


/*----- constants -----*/
const colorsArr = [
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
// let cardClicked = null
let turn = 0
let firstClick = ''
let secondClick = ''
/*----- cached element references -----*/
// Using more than once
const board = document.getElementById('board')

/*----- event listeners -----*/
board.addEventListener('click', flippedCard)

/*----- functions -----*/
// function initGame() {
//     render
// }

function flippedCard(evt) {
    const target = evt.target
    target.className = target.className.replace('color-hidden', '')
    if (turn === 0) {
        firstClick = target.getAttribute('data-color')
        turn++
    } else {
        secondClick = target.getAttribute('data-color')
        turn = 0
        if (firstClick === secondClick) {
            firstClick.className += 'done'
            secondClick.className += 'done'
        } else {

        }
    }


    // target.className += 'done'

    // if (!cardClicked) {
    //     cardClicked = target
    // } else if (cardClicked) {
    //     if (cardClicked.getAttribute('data-color') === target.getAttribute('data-color')) {
    //         console.log('cards are the same')
    //     } else {
    //         console.log('cards are not the same')
    //     }
    // }

}

    // if (turn === 0) {
    //     firstClick = target
    //     console.log('this is the first click', firstClick)
    //     turn++
    // }
    // if (turn === 1) {
    //     secondClick =
    // }

// function render() {
//     board = randomColor()
// }


// // generate randomboard of color


// function randomColor(colorArray) {
//     let colorIdx = colorArray.length, randomIdx
//     while (colorIdx != 0) {
//         randomIdx = Math.floor(Math.random() * colorIdx)
//         colorIdx--
//         [colorArray[colorIdx], colorArray[randomIdx]] = [colorArray[randomIdx], colorArray[colorIdx]]
//     }
//     return colorArray
// }


// // win/loss logical
// // find all the pairs before timer runs out

// initGame()