import fs from "fs";
import { performance } from "node:perf_hooks";

export function d1p1() {
  // IO Operation
  const ioStartTime = performance.now();
  const input: Array<string> = fs.readFileSync("src/day1/part1/input.txt", "utf8").split("\n");
  const ioEndTime = performance.now();

  console.log(`IO time: ${ioEndTime - ioStartTime} ms`);

  const startTime = performance.now();
  const digits: Array<number> = [];

  // Detect digit
  const regex = /\d/g;

  const str: string = "treb7uchet";

  input.forEach((str) => {
    // Verify if it is a digit and add to array
    const match = str.match(regex);

    if (match?.length == undefined) {
      console.log("no digit");
    } else {
      const firstDigit = match[0];
      const lastDigit = match[match.length - 1];

      const concatenateDigits = firstDigit + lastDigit;

      digits.push(parseInt(concatenateDigits));
    }
  });

  const response = digits.reduce((a, b) => a + b, 0);
  console.log("Sum is: ", response);

  const endTime = performance.now();

  console.log(`Execution time: ${endTime - startTime} ms`);
}
