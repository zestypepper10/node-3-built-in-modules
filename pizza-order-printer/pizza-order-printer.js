/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */


// import fs - file system
import fs from "fs/promises";
// const fs = require("fs/promises");

// Gets user input
const command = process.argv[2];
const orderIndex = Number(process.argv[3]);

// Prints pizza orders
async function printOrders() {

  // Reads the "data.json" file and wait until it has finished loading.
  // Converts the file into plain text using UTF-8 encoding so the file is read as plain text.
  // Stores the file's contents in the variable "data".
  const data = await fs.readFile("data.json", "utf8");    //where data is a string 
  const orders = JSON.parse(data); // here JSON.parse(data) means the text is converted into a JS value.

  if (command === "getAllOrders") {
    orders.forEach((order) => console.log(order));

  } else if (command === "getOneOrder") {

    if (orders[orderIndex] === undefined) {
      console.log("Order not found. Please enter a valid order number.");
    } else {
      console.log(orders[orderIndex]);
    }

  } else {
    console.log("Invalid command.");
  }
}

printOrders();