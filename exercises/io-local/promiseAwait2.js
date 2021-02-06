const { RSA_NO_PADDING } = require("constants");
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function runAsync(folderPath) {
  try {
    const fileNames = await readFile(folderPath);
    // .catch(err => console.log(err));
    console.log(fileNames.toString('utf-8'));
  } catch (e) {
    console.log(e.message);
  }

}

console.log("hello");
runAsync('./arquivo.txt');