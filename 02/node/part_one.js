const { lineReader, getNextLine } = require("./lineReader");

(async () => {
  const reader = lineReader("input.txt");

  let safe_reports = 0;

  let line;
  while ((line = await getNextLine(reader)) !== null) {
    const levels = line
      .split(" ")
      .filter(Boolean)
      .map((n) => parseInt(n));

    if (report_is_safe(levels)) {
      safe_reports += 1;
    }
  }

  console.log(`Number of safe reports: ${safe_reports}`);
})();

function report_is_safe(levels) {
  // empty or const
  if (levels.lenght < 2) {
    return false;
  }

  // const
  if (levels[0] == levels[1]) {
    return false;
  }

  if (Math.abs(levels[0] - levels[1]) > 3) {
    return false;
  }

  let decreasing = levels[0] > levels[1];

  if (decreasing) {
    for (let i = 1; i < levels.length - 1; i++) {
      // 7 6 4 2 1
      // 7 [ 6   4   2   1]
      // 7 [[6] [4]  2   1]
      // 7 [ 6  [4] [2]  1]
      // 7 [ 6   4  [2] [1]]
      if (Math.abs(levels[i] - levels[i + 1]) > 3) {
        return false;
      }
      if (levels[i] <= levels[i + 1]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 1; i < levels.length - 1; i++) {
    if (Math.abs(levels[i] - levels[i + 1]) > 3) {
      return false;
    }

    if (levels[i] >= levels[i + 1]) {
      return false;
    }
  }

  return true;
}
