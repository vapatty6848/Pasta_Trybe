const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFilePromise);

async function executa() {
  const content = await readFilePromise('arquivo1.txt').then(res => console.log(res));
  console.log(content);
}

executa();