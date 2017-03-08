/**
 * 找出比输入小的用原数字拼成的数字。
 */
function nextSmaller(n) {
  if (n <= 0) return new Error('输入数字需为正数。')
  const arr = n.toString().split('').reverse()
  let firstLess = 0
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] < arr[i + 1]) {
  		firstLess = i + 1
  		break
  	}
  }
  if (firstLess === 0) return -1
  const sli = arr.slice(0, firstLess + 1).sort()
  const index = sli.indexOf(arr[firstLess])
  const keyN = sli[index - 1]
  sli.splice(index - 1, 1)
  const r = [...sli.sort(), keyN, ...arr.slice(firstLess + 1)].reverse().join('')
  if (r[0] === '0') return -1
  else return +r
}
