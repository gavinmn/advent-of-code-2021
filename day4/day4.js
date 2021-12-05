const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")

let [numberValues, ...boardNumbers] = data.split(/\n\n/)
let numbers = numberValues.split(",").map(Number)
let fullBoards = boardNumbers.map((board) => board.split(/\n/))
let boards = fullBoards.map((board) =>
	board.map((row) => row.split(" ").filter((value) => value != ""))
)

function findSum(board) {
	let sum = 0
	board.forEach((row) => {
		row.forEach((value) => {
			if (value != "x") {
				sum += parseInt(value)
			}
		})
	})
	return sum
}

function checkWinner(board) {
	for (const y in board) {
		let horizontalCount = 0
		let verticalCount = 0
		for (const x in board[y]) {
			if (board[y][x] == "x") {
				horizontalCount++
			}
			if (board[x][y] == "x") {
				verticalCount++
			}
		}
		if (horizontalCount == 5 || verticalCount == 5) {
			return true
		}
	}
	return false
}

function play(numbers, boards) {
	let winCount = 0
	for (const number in numbers) {
		for (const board in boards) {
			for (const row in boards[board]) {
				for (const value in boards[board][row]) {
					let integerValue = parseInt(boards[board][row][value])

					if (integerValue == numbers[number]) {
						boards[board][row][value] = "x"
					}
				}
			}
			if (checkWinner(boards[board])) {
				console.log(boards[board], numbers[number], boards.length)
				winCount++
				if (winCount == boards.length) {
					let boardSum = findSum(boards[board])
					let score = numbers[number] * boardSum
					return score
				} else {
					boards[board] = null
				}
			}
		}
	}
}

console.log(play(numbers, boards))
