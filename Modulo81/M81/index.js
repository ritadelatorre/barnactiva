const EMPTY_SPACE = '--'
const WIN_POSITION = '**'
const LINE_MESSAGE = 'Enhorabona, has fet línia!!'
const BINGO_MESSAGE = '🎉🎉 BINGO 🎉🎉'

let numbersPlayed = []

const ROW_ONE = ['01', EMPTY_SPACE, '23', EMPTY_SPACE, EMPTY_SPACE, '51', EMPTY_SPACE, '74', '80']
let rowOneIsLine = false

const ROW_TWO = [EMPTY_SPACE, '13', EMPTY_SPACE, '32', '46', EMPTY_SPACE, '61', EMPTY_SPACE, '84']
let rowTwoIsLine = false

const ROW_THREE = ['07', EMPTY_SPACE, '28', '39', '49', EMPTY_SPACE, EMPTY_SPACE, '77', EMPTY_SPACE]
let rowThreeIsLine = false

const board = [ROW_ONE, ROW_TWO, ROW_THREE]
let bingo = false

const showBoardInHTML = () =>  document.getElementById('board').innerHTML = `${board[0].join(' | ')}<br><br>${board[1].join(' | ')}<br><br>${board[2].join(' | ')}`

const showNumInHTML = num => document.getElementById('num').innerHTML = num

const showResult = result => document.getElementById('result').innerHTML = result

const generateRandomNum  = () => Math.floor(Math.random () * (99) + 1);

const generateNumber = () => {
    let newNumber = 0

    while(!newNumber) {
        const randomNum = generateRandomNum()
        const numberIsPlayed = numbersPlayed.find(e => Number(e) === randomNum);
        if (!numberIsPlayed) newNumber = randomNum
    }

    numbersPlayed.push(newNumber)
    return newNumber
}

const checkNumInBoard = (numToCheck) => {
    let isNumInBoard = false
    board.forEach(row => {
        const index = row.findIndex((num) => Number(num) === numToCheck)
        if (index >= 0){
            row[index] = WIN_POSITION
            isNumInBoard = true
        }
    })
    return isNumInBoard
}

const checkLine = row => row.every(num => num === WIN_POSITION || num === EMPTY_SPACE);

const checkStatusGame = () => {
    if (!rowOneIsLine) {
        rowOneIsLine = checkLine(board[0])
        if (rowOneIsLine) showResult(LINE_MESSAGE)
    }
    if (!rowTwoIsLine) {
        rowTwoIsLine = checkLine(board[1])
        if (rowTwoIsLine) showResult(LINE_MESSAGE)
    }
    if (!rowThreeIsLine) {
        rowThreeIsLine = checkLine(board[2])
        if (rowThreeIsLine) showResult(LINE_MESSAGE)
    }
    if (rowOneIsLine && rowTwoIsLine && rowThreeIsLine) {
        bingo = true
        showResult(BINGO_MESSAGE)
    }
}

function giveNum () {

    const number = generateNumber()
    showNumInHTML(number)

    const isNumberInBoard = checkNumInBoard(number)
    if (isNumberInBoard) {
        checkStatusGame()
        showBoardInHTML()
    }
}