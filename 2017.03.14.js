// https://www.codewars.com/kata/5270f22f862516c686000161/train/javascript
// Extend the String object (JS) or create a function (Python, C#) that converts the value of the
//  String to and from Base64 using the ASCII (UTF-8 for C#) character set.
const base64Car = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
const addZero = n => str => str.length === n ? str : addZero(n)('0' + str)
const addTailZero = (n, str) => str + new Array(n + 1).join('x')

const toBase64 = function() {
	const str = this
	const binStr = [...str]
		.map(s => s.charCodeAt(0).toString(2).toString())
		.map(addZero(8)).join('')
	const finalBinStr = binStr.length % 24 === 0 ? binStr : addTailZero(24 - binStr.length % 24, binStr)
	return finalBinStr.match(/[\dx]{6}/g)
		.map(s => /\dx/.test(s) ? parseInt(s.replace(/x/g, '0'), 2): parseInt(s, 2))
		.map(i => Object.is(i, NaN) ? '=' : base64Car[i])
		.join('')


}
const fromBase64 = function() {
	const str = this
	return [...str]
		.map(s => base64Car.indexOf(s) > -1 ? base64Car.indexOf(s) : 'xxxxxx')
		.map(s => /x/.test(s) ? 'xxxxxx' : s.toString(2).toString())
		.map(addZero(6))
		.join('').match(/[\dx]{8}/g)
		.map(i => /x/.test(i) ? '' : String.fromCharCode(parseInt(i, 2)))
		.join('')

}
Object.assign(String.prototype, {toBase64, fromBase64})