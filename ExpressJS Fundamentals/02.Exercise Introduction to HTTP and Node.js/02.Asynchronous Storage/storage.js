var fs = require('fs');

let storage = {};

function put(key, value, callback){
  if(typeof key !== 'string'){
    throw 'Key has to be a string';
  }

  if(storage[key] != undefined){
    throw 'Key already exist.';
  }

  storage[key] = value;

  callback(true);
}

function get(key, callback){
  if(typeof key !== 'string'){
    throw 'Key has to be a string.';
  }

  if(storage[key] == undefined){
    throw 'Key does not exist.';
  }

  callback(dn[key]);
}

function getAll(callback){
  if(Object.keys(storage).length === 0){
    throw 'Storage is empty';
  }

  callback(storage);
}

function update(key, newValue, callback){
  if(typeof key !== 'string'){
    throw 'Key has to be a string';
  }

  if(storage[key] == undefined){
    throw 'Key does not exist.';
  }

  storage[key] = newValue;

  callback(true);
}

function deleteEntry(key, callback){
  if(typeof key !== 'string'){
    throw 'Key has to be a string';
  }

  if(storage[key] == undefined){
    throw 'Key does not exist.';
  }

  callback(true);
}

function clear(callback){
  storage = {};

  callback(true);
}

function save(callback){
  var jsonData = JSON.stringify(storage);
  fs.writeFileAsync("storage.json", jsonData,'utf-8', function(err) {
      if (err) {
          console.log(err);
      }
  });

  callback(true);
}

function load(callback){
  if(!fs.exists('storage.json')){
    return;
  }

  storage = JSON.parse(fs.readFile('storage.json'));

  callback(true);
}

module.exports = {put,get,getAll,update,deleteEntry,clear,save,load};