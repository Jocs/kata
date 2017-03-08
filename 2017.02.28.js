/**
 * For a given chemical formula represented by a string, 
 * count the number of atoms of each element contained in the molecule and return an object.

 *	For example:

 *	var water = 'H2O';
 * 	parseMolecule(water); // return {H: 2, O: 1}

*	var magnesiumHydroxide = 'Mg(OH)2';
* 	parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

*	var fremySalt = 'K4[ON(SO3)2]2';
* 	parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
*  	As you can see, some formulas have brackets in them. The index outside the brackets 
*   tells you that you have to multiply count of each atom inside the bracket on this index. 
*   For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

*	Note that brackets may be round, square or curly and can also be nested. Index after 
* 	the braces is optional.
*/
function parseMolecule(formula) {
	// do your science here
	const ELE_REG = /[A-Z][a-z]?/
	const NUM_REG = /\d+/
	const BRA_REG = /[\[\]\(\)\{\}]/
	const POS_BRA_REG = /[\}\]\)]/
	const NAG_BRA_REG = /[\[\{\(]/
	const token = formula.match(/[A-Z][a-z]?|[\[\]\{\}\(\)]|\d+/g)
	const mulCache = [1]
	return token.reverse().reduce((acc, t, i) => {
		if (ELE_REG.test(t)) {
			acc[t] = (acc[t] ? acc[t] : 0) + mulCache.reduce((ac, m) => ac * m, 1) * (NUM_REG.test(token[i - 1]) ? +token[i - 1] : 1)
		} else if (NUM_REG.test(t) && POS_BRA_REG.test(token[i + 1])) {
			mulCache.push(+t)
		} else if (NAG_BRA_REG.test(token[i])) {
			mulCache.pop()
		}
		return acc
	}, {})
}
