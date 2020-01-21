let word = "lines";
  for (let counter = 99; counter > 0; counter--) {
    console.log(counter + " " + word + " " + "of code in the file,");
    console.log(counter + " " + word + " " + "of code,");
    console.log("John strikes one out, clears it all out,");
    if (counter <= 2) {
      if (counter === 1) {
        break;
      }
      word = "line";
    }
    console.log(counter - 1 + " " + word + " " + "of code in the file;");
  }
  console.log("No more lines of code in the file.");