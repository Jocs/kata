const sumStrings = (a, b) => {
	const longString = a.length > b.length ? a : b
	const shortString = a.length > b.length ? b : a
	const roughNumber = longString.split('').reduceRight((acc, n, index) => {
		const temp = Number(n) + Number(shortString[index - (longString.length - shortString.length)] || 0) + acc[1]
		if (index === 0) return [temp + acc[1] + acc[0], 0]
		if(temp >= 10) {
			return [temp % 10 + acc[0], 1]
		} else {
			return [temp + acc[0], 0]
		}
	},['', 0])[0]
	const ret = /^0*(\d*)/.exec(roughNumber)
	return ret[1]
}

console.log(sumStrings('00129', '1234'))