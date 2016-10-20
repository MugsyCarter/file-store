const store = require('../lib/store');
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
  }
];

describe('store.saveFile', function(){
    it('creates a new directory', function(done){
     store.saveFile(elements, 'elements', storeTest);
      fs.exists('/data/elements', (exists) => {
        var z = (exists ? 'yes' : 'nope!');
      });
      assert.equal(z, 'yes');
    });  
  
  // it.('creates JSON files in the directory', done => {

  //   const callback = (err) => {
  // });

  // it.('creates the correct number of files', done => {

  //   const callback = (err) => {
  // });




});

function storeTest(){
  console.log('Fart, error is ');
};




;