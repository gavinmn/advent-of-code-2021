const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")
const line = data.split("\n")

function findMostCommon(arr, inverse) {
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
		} else if (coutZero == coutOne) {
			return 1
		} else {
			return 1
		}
	} else {
		if (coutZero > coutOne) {
			return 1
		} else if (coutZero == coutOne) {
			return 0
		} else {
			return 0
		}
	}
}

function getBits(line, index, arr) {
	for (let row in line) {
		arr.push(line[row][index])
	}
}

function getPowerConsumption(gamma, epsilon) {
	let gammaValue = parseInt(gamma.join(""), 2)
	let epsilonValue = parseInt(epsilon.join(""), 2)
	let powerConsumption = gammaValue * epsilonValue
	return powerConsumption
}

function part1(line) {
	let gamma = []
	let epsilon = []
	for (let index = 0; index < line[0].length; index++) {
		let tempGamma = []
		getBits(line, index, tempGamma)
		var integers = tempGamma.map((x) => parseInt(x))
		gamma.push(findMostCommon(integers, false))
		epsilon.push(findMostCommon(integers, true))
	}
	return getPowerConsumption(gamma, epsilon)
}

// console.log(part1(line))

function filterDown(arr, index, inverse) {
	while (arr.length > 1) {
		let tempArr = []
		getBits(arr, index, tempArr)
		var integers = tempArr.map((x) => parseInt(x))
		arr = arr.filter(
			(row) => row[index] == findMostCommon(integers, inverse)
		)
		index++
	}
	return arr
}

function part2(line) {
	let oxygen = line
	let co2scrubber = line

	let oxygenIndex = 0
	let oxygenResult = filterDown(oxygen, oxygenIndex, false)
	let oxygenDecimal = parseInt(oxygenResult.join(""), 2)

	let co2scrubberIndex = 0
	let co2scrubberResult = filterDown(co2scrubber, co2scrubberIndex, true)
	let co2scrubberDecimal = parseInt(co2scrubberResult.join(""), 2)

	return oxygenDecimal * co2scrubberDecimal
}

console.log(part2(line))
