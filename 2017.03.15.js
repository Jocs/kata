// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
	// TODO
    const preCount = n * (n - 1) / 2
    const startNum = preCount + 1
    let result = 0
    for (let i = 0; i < n; i++) {
        result += startNum + 2 * i
    }
    return result
}
// Best Practice
// const rowSumOddNumbers = n => n ** 3