var chessboard = function(width) {
  let chessboard = "";
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < width; j++) {
      if ((i + j) % 2 == 0) {
        chessboard += " ";
      } else {
        chessboard += "#";
      }
      // if (i % 2 == 0) { 
      //   chessboard += (j % 2 == 0) ? " " : "#"; 
      // } else { 
      //   chessboard += (j % 2 == 0) ? "#" : " "; 
      // }
    }
    chessboard += "\n";
  }
  console.log(chessboard);
}

chessboard(8);