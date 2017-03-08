function sortByPath(arr, path) {
  arr.sort((a, b) => eval(`a.${path}`) > eval(`b.${path}`))
  return arr
}

var arr = [
  {a:{b:[0,4]}},
  {a:{b:[0,1]}},
  {a:{b:[0,3]}}
]

const r = sortByPath(arr, 'a.b[1]')
console.log(r[0].a.b[1])