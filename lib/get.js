const fs = require('fs');
const path = require('path');
var get = {};

//this function will find an individual file in the elements folder
get.findFile = function(name){
    var path = '../data/elements/' + name + '.json';
    fs.readFile(path, 'utf-8', (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data)
  console.log(obj);
  return obj;
});
}

//this function finds all the files in the elements folder
get.findAllFiles = function(name){
var path = '../data/' + name;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    console.log(filenames);
    return filenames;
  });
}



//this function will find the data in the elements folder by filename, un-jsonify the data, and group it into an object
get.mergeAllFiles = function(name){
arr = [];
  var path = '../data/' + name;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
  filenames.forEach(function(fileName){
    var path = '../data/elements/' + fileName;
    fs.readFile(path, 'utf-8', (err, data) => {
  if (err) throw err;
  arr.push(JSON.parse(data));
    if (arr.length === filenames.length) {
             console.log('here is the final array ', arr);
            return arr;
    }
  });
  });
});
}


// get.findFile('lithium');
// get.findAllFiles('elements');
get.mergeAllFiles('elements');



module.exports=get;