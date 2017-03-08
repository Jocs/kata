/* 求凸包极点 */

const genRNumber = () => Math.floor(Math.random() * 101)
const Pots = []
var i = 1000

while(i--) Pots.push([genRNumber(), genRNumber()])
const len = Pots.length
const result = []

for (var i = 0; i < len - 1; i++) {
	for (var j = i + 1; j < len; j++) {
		var a = Pots[j][1] - Pots[i][1]
		var b = Pots[i][0] - Pots[j][0]
		var c = Pots[i][0] * Pots[j][1] - Pots[j][0] * Pots[i][1]
		var temp = [0, 0]

		for (var k = 0; k < len; k++) {
			if (k !== i && k !== j) {
				a * Pots[k][0] + b * Pots[k][1] - c >= 0 ? temp[0]++ : temp[1]++
			}
		}
		if (temp[0] === 998 || temp[1] === 998) result.push([Pots[i], Pots[j]])
	}
}

console.log(result)