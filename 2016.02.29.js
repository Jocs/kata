function sumIntervals(intervals){
  //TODO
  const res = new Set([])
  intervals.forEach(arr => {
  	let i = arr[1] - arr[0]
  	while (i--) res.add(arr[0] + i)
  })
  return res.size
}