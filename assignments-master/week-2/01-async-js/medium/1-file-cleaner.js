// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const { log } = require("console");
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  const newData = data.replace(/\s+/g, " ");
  console.log(newData);
  fs.writeFile("a.txt", newData, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file updated");
  });
});
