const solutionX = list => list.reduce((acc, x) => {
	const popFirstItem = acc.pop()
	const popSecondItem = acc[acc.length - 1]
	if (!popFirstItem) {
		acc.push(x + '')
		return acc
	}
	if (popFirstItem
		&& /\-{1}(\-*\d+)$/.test(popFirstItem)
		&& ~~popFirstItem.match(/\-{1}(\-*\d+)$/)[1] == x - 1) {

		acc.push(popFirstItem.replace(/(\-{1})(\-*\d+)$/, '$1' + x))
		return acc

	} else if (popFirstItem && popFirstItem 
		&& Number(popFirstItem) == x - 1 
		&& Number(popSecondItem) == x - 2) {

		acc.pop()
		acc.push(Number(popSecondItem) + '-' + x)
		return acc

	} else {
		acc.push(popFirstItem)
		acc.push(x + '')
		return acc
	}
}, [])

const res = solutionX([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

console.log(res)