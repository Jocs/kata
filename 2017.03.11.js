// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript
// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite ammount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0
var countChange = function(money, coins) {
	// your implementation here
	const sortedCoins = coins.sort((x, y) => x - y)
	const sum = arr => arr.reduce((acc, a) => acc + a)
	const justSmall = (arr, n) => arr[arr.indexOf(n) - 1]
  	let count = 0
  	let stack = [Math.max(...coins)]
  	while (true) {
  		const total = sum(stack)
  		if (total < money) stack.push(stack[stack.length - 1])
  		else if (total >= money) {
  			if (total === money) count++
  			while(stack.length) {
	  			const peak = stack.pop()
	  			const small = justSmall(sortedCoins, peak)
	  			if (small) {
	  				stack.push(small)
	  				break
	  			} 
  			}
  			if (!stack.length) break
  		}
  	}
  	return count
}
