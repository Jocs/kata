// Task

// The number is considered to be unlucky if it does not have digits 4 and 7 and is divisible by 13. Please count all unlucky numbers not greater than n.
// Example

// For n = 20, the result should be 2 (numbers 0 and 13).

// For n = 100, the result should be 7 (numbers 0, 13, 26, 39, 52, 65, and 91)
// Input/Output

// [input] integer n

// 1 ≤ n ≤ 10^8
// [output] an integer
function unluckyNumber(n) {
  //coding and coding..
  let i = 0
  let count = 0
  while(i * 13 < n) {
  	count = /[47]/.test(i * 13) ? count : count + 1
  	i++
  }
  return count
}