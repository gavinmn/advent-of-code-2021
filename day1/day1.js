const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf8")

const measurements = data
	.split("\n")
	.map((measurement) => parseInt(measurement))

function part1(measurements) {
	let counter = 0
	for (let i = 0; i < measurements.length; i++) {
		if (measurements[i + 1] > measurements[i]) {
			counter++
		}
	}
	return counter
}

function part2(measurements) {
	let counter = 0
	for (let i = 0; i < measurements.length; i++) {
		if (
			measurements[i] + measurements[i + 1] + measurements[i + 2] <
			measurements[i + 1] + measurements[i + 2] + measurements[i + 3]
		) {
			counter++
		}
	}
	return counter
}
console.log(part2(measurements))
