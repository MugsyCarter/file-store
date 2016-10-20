const store = require('../lib/store');
const get = require('../lib/get');
const assert = require('assert');
const fs = require('fs');

const elements = [
  {
    name: "hydrogen",
    number: 1,
    mass: 1,
    symbol: "H"
  },
  {
    name: "helium",
    number: 2,
    mass: 4,
    symbol: "He"
  },
  {
    name: "lithium",
    number: 3,
    mass: 7,
    symbol: "Li"
  },
    {
    name: "Beryllium",
    number: 4,
    mass: 9,
    symbol: "Be"
  },
    {
    name: "Boron",
    number: 5,
    mass: 11,
    symbol: "B"
  }
];

// describe('store.saveFile', function(){

//     it('creates a new directory', function(done){
//      store.saveFile(elements, 'elements', storeTest);
//       assert.ok(fs.existsSync('../data/elements'));
//       done();
//     });  
  
  // it('creates JSON files in the directory', done => {

  //   const callback = (err) => {
  // });

//  it('creates JSON files in the directory whose contents are equal to the original content when parsed', function(){
//    var finalObj = get.mergeAllFiles('elements');
//    console.log(finalObj);
//    console.log("elements is ", elements);
//   assert.deepEqual(elements, get.mergeAllFiles('elements'));
//       done();
//     });
// });
// });

// function storeTest(){
//   console.log('Error is ');
// };

//get callback function
function myCallback(){
    console.log('Call Back, Please.')
};

//store callback function
function callMergeAll(){
  get.mergeAllFiles('elements', myCallback);
};

//function call
store.saveFile(elements, 'elements', callMergeAll);


