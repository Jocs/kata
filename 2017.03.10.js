// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal 
// integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
//  starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 
//  90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI",
//   uses each letter in descending order.

// Example:
// solution('XXI'); // should return 21
/**
 * Ｉ:1、Ｖ:5、Ｘ:10、Ｌ:50、Ｃ:100、Ｄ:500、Ｍ:1000
 */
function solution(roman){
	const hash = {
		I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
	}
	const REG = /(M{1,4})|(C?M|DC{1,3}|C?D|C{1,3})|(X?C|LX{1,3}|X?L|X{1,3})|(I?X|VI{1,3}|I?V|I{1,3})/g
	const token = roman.match(REG)
	return token.reduce((acc, t) => {
		if (t.length === 2 && hash[t[0]] < hash[t[1]]) {
			return acc + hash[t[1]] - hash[t[0]]
		} else {
			return acc + t.split('').reduce((acc, to) => acc + hash[to], 0)
		}
	}, 0)
}