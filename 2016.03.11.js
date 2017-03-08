Array.prototype.remove = function(pred) {
	var removed = this.filter(function(item) {
		return pred(item)
	})

	this.forEach(function(i, index, arr) {
		if (removed.indexOf(i) !== -1) arr.splice(index, 1)
	})

	return removed
}

var arr = [1, 2, 3, 4, 5, 6]
var removed = arr.remove(function(e) {return e % 2 === 0})
console.log(arr)
console.log(removed)
