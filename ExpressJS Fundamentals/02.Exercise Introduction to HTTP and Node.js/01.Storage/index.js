const storage = require("./storage");

storage.put("First", "FirstTest");
storage.put("Second", "SecondTest")
storage.put("DelThis", "DeleteMePlease")

// console.log(storage.get("First"));

// console.log(storage.getAll());

// storage.update("First", "FirstTestChanged");
// console.log(storage.get('First'));

// storage.delete('DelThis');
// console.log(storage.getAll());

// storage.clear();
// console.log(storage.getAll());

storage.save();
storage.load();
console.log(storage.getAll())
