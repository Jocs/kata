function nextBigger(n){
	if ((n + '').split('').reduce((acc, item, i, arr) => acc && (Number(item) >= Number(acc[i + 1] || 0)), true)) {
		return -1
	}
	const set = new Set([])
	

}

console.log(nextBigger(54321))