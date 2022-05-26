const fs = require('fs');
const fileName = './cms/package.json';
const file = require(fileName);

file.scripts = {...file.scripts, dev: "sanity start"};
    
fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(fileName, "successfully updated");
});