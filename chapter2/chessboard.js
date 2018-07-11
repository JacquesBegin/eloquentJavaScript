chessboard = (width) => {
  let chessboardString = "";
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < width; j++) {
      if (i % 2 == 0) {
        chessboardString += (j % 2 == 0) ? " " : "#";
      } else {
        chessboardString += (j % 2 == 0) ? "#" : " ";
      }
    }
    chessboardString += "\n";
  }
  console.log(chessboardString);
}

chessboard(8);