// Consider a sequence u where u is defined as follows:
// 	1. The number u(0) = 1 is the first one in u.
// 	2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// 	3. There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
// Example:
// dbl_linear(10) should return 22
// Note:
// Focus attention on efficiency
function dblLinear(n) {
	console.log(n)
    // your code
    const mi = (m, total) => m === 0 ? total : mi(m - 1, total * 3)
    const getM = n => {
    	let m = 1
    	while(m++) if (mi(m, 1) >= n) return m
    }
	const m = getM(n) + 5 // 5是什么鬼。。。
	const result = [[1]]
	for (let i = 0; i < m; i++) {
		result.push([...new Set([...result[i].map(r => 2 * r + 1), ...result[i].map(r => 3 * r + 1)])])
	}
	const ret = [...new Set(result.reduce((acc, r) => [...acc, ...r], []).sort((x, y) => x - y))]
	return ret[n]
}
/**
 * Best Practices
 */
function dblLinear(n) {
    let ai = 0,
        bi = 0,
        eq = 0,
        sequence = [1];

    while (ai + bi < n + eq) {// ai + bi - eq 是 push() 进数组的数的个数
        let y = 2 * sequence[ai] + 1,
            z = 3 * sequence[bi] + 1;
        
        if (y < z) {// 先把 x y 中较小的压入 sequence
            sequence.push(y);
            ai++;
        } else if (y > z) {
            sequence.push(z);
            bi++;
        } else {
            sequence.push(y);
            ai++;
            bi++;
            eq++;
        }
    }
    return sequence.pop();
}