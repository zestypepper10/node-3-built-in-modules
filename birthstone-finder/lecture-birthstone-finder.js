/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */

// import fs - file system
import fs from "fs/promises";
// const fs = require("fs/promises");


// Get user inputted month
const month = process.argv[2];

// Find the birthstone for the inputted month and print it to the console
async function getBirthStone() {
  const data = await fs.readFile("data.json", "utf8");
  const birthstones = JSON.parse(data);

  // print birthstone with if/else statement
  if (!birthstones[month]) {
    console.log("Invalid month. Please enter a valid month name.");
  } else {
    console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
  }
}
getBirthStone();