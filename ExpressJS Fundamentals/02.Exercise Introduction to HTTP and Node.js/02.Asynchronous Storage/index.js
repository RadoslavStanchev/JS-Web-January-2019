let storage = require('./storage.js');

try{
  storage.put('first','firstValue')
}catch(err){
  console.log(err);
}
try{
  storage.put('second','secondValue')
}catch(err){
  console.log(err);
}
try{
  storage.deleteEntry('second')
}catch(err){
  console.log(err);
}
try{
  storage.deleteEntry('second')
}catch(err){
  console.log(err);
}
try{
  storage.put(2,'someValue')
}catch(err){
  console.log(err);
}
