const removeNb = n => [...Array(n).keys()].reduce((acc, i) => {
	const b = (n * (n + 1)/2 - i) / (i + 1)
	return Math.floor(b) === b ? [...acc, [i, b]] : acc
}, [])