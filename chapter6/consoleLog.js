function consoleLog(...items) {
  let output = "";
  for (let item of items) {
    if (typeof item[console.Symbols.INSPECT] === 'function') {
      output += item[console.Symbols.INSPECT](item);
    } else {
      output += console.inspect[typeof item](item);
    }
    output += " ";
  }
  process.stdout.write(output + "\n");
}

consoleLog("hi", " ", "there");