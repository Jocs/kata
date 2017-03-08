// The problem

// In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

// Points will be represented as [x,y] arrays.

// The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

// You can assume:

// The polygon will be a valid simple polygon. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.
// In the tests, the point will never fall exactly on an edge of the polygon.
// Testing

// To help you visualize your test cases, the showAndTest(poly,point,inside) function is preloaded. It draws the polygon and point and then calls Test.expect automatically.

// So if you call:

// showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)
// then you'll see:

// The drawing window is 14x14 units wide and centered at the origin.

//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
	const x = point[0]
	const y = point[1]
	const len = poly.length
	const sides = poly.map((p, i) => i < len - 1 ? [p, poly[i + 1]] : [p, poly[0]])
	let flag = false
	sides.forEach(side => {
		const x1 = side[0][0]
		const y1 = side[0][1]
		const x2 = side[1][0]
		const y2 = side[1][1]
		if (y1 === y2) return false
		if ((y2 > y && y1 < y) || (y2 < y && y1 > y)) {  
			const dx = (-y1 * x2 + y2 * x1 + x2 * y - x1* y) / (y2 - y1)
			if (dx < x) flag = !flag
		}
	})
	return flag
}










