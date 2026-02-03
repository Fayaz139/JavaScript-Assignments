// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function fileWrite(err) {
    if (err) {
        console.log("Error writing into the file");
    }
    else {
        console.log("File written successfully");      
    }
}

fs.writeFile("3.txt", "Hello", fileWrite);

let sum = 0;
for (let i = 1; i <= 200000000; i++) {
    sum += i;
}
console.log(sum);