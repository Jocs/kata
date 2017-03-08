// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript
// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.
// 
function loop_size(node){
   const nodes = []
   let x = null
   while(node.getNext()) {
   		node = node.getNext()
   		if (nodes.some(n => n === node)) {
   			x = node
   			break
   		}
   		nodes.push(node)
   }
   return nodes.length - nodes.indexOf(x)
}