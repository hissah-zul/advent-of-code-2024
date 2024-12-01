const { lineReader, getNextLine } = require("./lineReader");

(async () => {
  const reader = lineReader("input.txt");

  let leftList = [];
  let rightList = {};
  let line;
  while ((line = await getNextLine(reader)) !== null) {
    const locations = line
      .split(" ")
      .filter(Boolean)
      .map((n) => parseInt(n));

    leftList.push(locations[0]);

    if (!rightList.hasOwnProperty(locations[1])) {
      rightList[locations[1]] = 0;
    }

    rightList[locations[1]] = rightList[locations[1]] + 1;
  }

  let distance = 0;

  for (let i = 0; i < leftList.length; i++) {
    if (rightList[leftList[i]]) {
      distance += rightList[leftList[i]] * leftList[i];
    }
  }

  console.log(`Distance: ${distance}`); // 20520794
})();
