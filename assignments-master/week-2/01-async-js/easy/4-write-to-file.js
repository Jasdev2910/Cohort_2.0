// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("a.txt", "this is some modification", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file updated");
  }
});

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
