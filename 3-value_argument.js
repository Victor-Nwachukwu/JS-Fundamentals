const { argv } = require('node:process');


if (argv[2] === undefined) {
  console.log("No argument");
} else if (argv[3] === undefined) {
  console.log(argv[2]);
} else {
  // Based on the expected output "HBTN" for input "HBTN cool",
  // it seems only the first argument should be printed when there are two or more.
  console.log(argv[2]);
}
