const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")

let [numberValues, ...boardNumbers] = data.split(/\n\n/)
let numbers = numberValues.split(",").map(Number)
let fullBoards = boardNumbers.map((board) => board.split(/\n/))
let boards = fullBoards.map((board) =>
	board.map((row) => row.split(" ").filter((value) => value != ""))
)

function play(numbers, boards) {
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
			console.log(boards[board])
			if (checkWinner(boards[board])) {
				let boardSum = findSum(boards[board])
				let score = numbers[number] * boardSum
				return score
			}
		}
	}
}

function checkWinner(board) {
	for (const y in board) {
		let horizontalCount = 0
		let verticalCount = 0
		for (const x in board[y]) {
			if (board[y][x] == "x") {
				horizontalCount++
			} else if (board[x][y] == "x") {
				verticalCount++
			}
		}
		if (horizontalCount == 5 || verticalCount == 5) {
			return true
		}
	}
	return false
}

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

console.log(play(numbers, boards))
