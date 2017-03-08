// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer.
//  There is a global var that holds the numeric ID to which wire to cut. Find that and then you 
//  can Bomb.CutTheWire(wireKey);
function BuildBomb(global){
  global.mode = null; // Fix reference error bug from codewars api changes
  global.label = null; // Fix reference error bug from codewars api changes
  
  var myWireVar = 'boom'+~~(Math.random()*10);
  var cutWireVal = Math.random();
  global[myWireVar] = Math.random();
  global.Bomb = global.bomb = new Bomb();
  global.bomb.toString = function(){ return BuildBomb.toString(); };
  Object.defineProperty(global, 'bomb', { configurable: false, writable: false });
  Object.seal(global);
  Object.freeze(global.bomb);
  Object.freeze(BuildBomb);
  return global.bomb;
  
  function Bomb (){
    this.Explode = function(){
      var myWireCode = global[myWireVar];
      describe('When the timer expires', function() {
        it('The wire should be cut', function() {
          Test.expect(myWireCode === cutWireVal, 'BOOM! You failed to cut the wire!');
        });
      });
    };
    this.CutTheWire = function(wireCode){
      var myWireCode = global[myWireVar];
      console.log(`Cutting ${wireCode}.`);
      describe('When cutting the wire', function() {
        it('A numeric wireCode should be specified', function() {
          Test.expect(typeof wireCode === 'number', 'BOOM! You have to specify the number ID of the wire to cut.');
        });
        it('The correct wireCode should be specified:', function() {
          Test.expect(myWireCode === wireCode, 'BOOM! You cut the wrong wire!');
        });
      });
      
      if (wireCode == myWireCode)
        global[myWireVar] = cutWireVal;
    }; 
  };
}