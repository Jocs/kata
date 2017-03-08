function pascalsTriangle(n) {
  	//return a flat array representing the values of Pascal's Triangle to the n-th level
  	if (n === 1) return [1]
  	if (n === 2) return [1, 1, 1]
    return pascalsTriangle(n - 1)
		   .concat(1, pascalsTriangle(n - 1)
		   .slice(-n + 1)
		   .reduce(function(arr, item, index, array) {
			    if (array[index + 1]) {
			    	arr.push(item + array[index + 1])
			    }
			    return arr
			}, []), 1)
}

console.log(pascalsTriangle(4))