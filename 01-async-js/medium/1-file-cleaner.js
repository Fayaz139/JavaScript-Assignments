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

const fs = require("fs");


function callback(err, response) {
    if (!err) {
        let str = response;
        str = str.trim().replace(/\s+/g, " ");
        fs.writeFile("1.txt", str, writeBack);
        function writeBack(err) {
            if (err) {
                console.log("There was an issue writing onto the file");
            }
            else {
                console.log("File written successfully");
            }
        }
    }
}
fs.readFile("1.txt", "utf-8", callback);