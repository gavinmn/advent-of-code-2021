const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")

const position = data.split("\n")

function part1(position) {
	let forward = 0
	let depth = 0
	for (let i = 0; i < position.length; i++) {
		let direction = position[i].split(" ")[0]
		let ammount = parseInt(position[i].split(" ")[1])
		if (direction == "forward") {
			forward += ammount
		} else if (direction == "down") {
			depth += ammount
		} else if (direction == "up") {
			depth -= ammount
		}
	}
	let result = forward * depth
	return result
}

function part2(position) {
	let forward = 0
	let aim = 0
	let depth = 0
	for (let i = 0; i < position.length; i++) {
		let direction = position[i].split(" ")[0]
		let ammount = parseInt(position[i].split(" ")[1])
		if (direction == "forward") {
			forward += ammount
			depth += aim * ammount
		} else if (direction == "down") {
			aim += ammount
		} else if (direction == "up") {
			aim -= ammount
		}
	}
	let result = forward * depth
	return result
}

console.log(part2(position))
