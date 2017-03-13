// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  return [...str].filter(s => ['a', 'e', 'i' , 'o', 'u'].includes(s)).length
}