// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// Numbers should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b) {
	const number1 = a.split('').reverse()
	const number2 = b.split('').reverse()
	const addZero = (i, arr) => i === 0 ? arr : addZero(i - 1, [0, ...arr])
	const trimZero = arr => {
		const str = arr.join('').replace(/^0+/, '')
		return str === '' ? '0' : str
	}
	const d2Array = number2.reduce((acc, n, i) => {
		let cache = 0;
		const mul = number1.reduce((ac, nu, i) => {
			ac.push((nu * n + cache) % 10)
			cache = Math.floor((nu * n + cache) / 10)
			if (i === number1.length - 1 && cache !== 0) ac.push(cache)
			return ac
		}, [])
		return [...acc, addZero(i, mul)]
	}, [])
	const result = d2Array.reduce((acc, d, i) => {
		let cache = 0
		return d.reduce((ac, dd, i) => {
			ac.push((dd + cache + (acc[i] ? acc[i] : 0)) % 10)
			cache = Math.floor((dd + cache + (acc[i] ? acc[i] : 0)) / 10)
			if (i === d.length - 1 && cache !== 0) ac.push(cache)
			return ac
		}, [])
	}, []).reverse()
	return trimZero(result)
}