const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")
const line = data.split("\n")
let gamma = []
let epsilon = []

function part1FindMostCommon(arr, inverse) {
	let coutZero = 0
	let coutOne = 0
	for (i in arr) {
		if (arr[i] === 0) {
			coutZero++
		} else {
			coutOne++
		}
	}
	if (!inverse) {
		if (coutZero > coutOne) {
			return 0
		} else {
			return 1
		}
	} else {
		if (coutZero > coutOne) {
			return 1
		} else {
			return 0
		}
	}
}

function part1GetVariables(line) {
	for (let index = 0; index < line[0].length; index++) {
		let tempGamma = []
		for (let row in line) {
			tempGamma.push(line[row][index])
		}

		var integers = tempGamma.map((x) => parseInt(x))
		gamma.push(part1FindMostCommon(integers, false))
		epsilon.push(part1FindMostCommon(integers, true))
	}
}

function part1GetPowerConsumption(gamma, epsilon) {
	let gammaValue = parseInt(gamma.join(""), 2)
	let epsilonValue = parseInt(epsilon.join(""), 2)
	let powerConsumption = gammaValue * epsilonValue
	return powerConsumption
}

part1GetVariables(line)

console.log(part1GetPowerConsumption(gamma, epsilon))
