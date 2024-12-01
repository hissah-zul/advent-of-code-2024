const fs = require("fs");
const readline = require("readline");

async function* lineReader(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const reader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of reader) {
    yield line;
  }
}

async function getNextLine(reader) {
  const result = await reader.next();
  if (result.done) {
    return null;
  }
  return result.value;
}

module.exports = {
  lineReader,
  getNextLine,
};
