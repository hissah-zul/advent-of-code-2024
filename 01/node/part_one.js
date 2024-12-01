const { lineReader, getNextLine } = require("./lineReader");

(async () => {
  const reader = lineReader("input.txt");

  let leftList = [];
  let rightList = [];
  let line;
  while ((line = await getNextLine(reader)) !== null) {
    const locations = line
      .split(" ")
      .filter(Boolean)
      .map((n) => parseInt(n));

    leftList.push(locations[0]);
    rightList.push(locations[1]);
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let distance = 0;
  for (let i = 0; i < leftList.length; i++) {
    distance += Math.abs(leftList[i] - rightList[i]);
  }

  console.log(`Distance: ${distance}`); // 1765812
})();
