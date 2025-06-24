const fs = require("fs");
const { buffer } = require("stream/consumers");

// const book = {
//   title: "ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const data = JSON.parse(bookJSON);
// console.log(data.title);

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Aditya";
user.age = 29;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
