///couldn't find out how to loop through to determined the game was finished.

let boardArr = [];

function play(clickedId) {
  const clickedElement = document.getElementById(clickedId);
  const playerSpan = document.getElementById("player");
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    boardArr[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    boardArr[clickedId] = "O";
  }
  if (
    (boardArr[0] === "X" && boardArr[1] === "X" && boardArr[2] === "X") ||
    (boardArr[0] === "O" && boardArr[1] === "O" && boardArr[2] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[3] === "X" && boardArr[4] === "X" && boardArr[5] === "X") ||
    (boardArr[3] === "O" && boardArr[4] === "O" && boardArr[5] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[6] === "X" && boardArr[7] === "X" && boardArr[8] === "X") ||
    (boardArr[6] === "O" && boardArr[7] === "O" && boardArr[8] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[0] === "X" && boardArr[3] === "X" && boardArr[6] === "X") ||
    (boardArr[0] === "O" && boardArr[3] === "O" && boardArr[6] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[1] === "X" && boardArr[4] === "X" && boardArr[7] === "X") ||
    (boardArr[1] === "O" && boardArr[4] === "O" && boardArr[7] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[2] === "X" && boardArr[5] === "X" && boardArr[8] === "X") ||
    (boardArr[2] === "O" && boardArr[5] === "O" && boardArr[8] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[0] === "X" && boardArr[4] === "X" && boardArr[8] === "X") ||
    (boardArr[0] === "O" && boardArr[4] === "O" && boardArr[8] === "O")
  ) {
    window.alert("Winner!");
  } else if (
    (boardArr[2] === "X" && boardArr[4] === "X" && boardArr[6] === "X") ||
    (boardArr[2] === "O" && boardArr[4] === "O" && boardArr[6] === "O")
  ) {
    window.alert("Winner!");
  }

  boardFull = true;
  for (let i = 0; i < 9 ; i++) {
    if (boardArr[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
      console.log(boardArr)
    window.alert("It was a cats game");
  }
}

//Tried to condense into row patterns, but it could limit what was being tracked
// const topRow = [topLeft, topCenter, topRight];

// console.log(document.getElementById('test'));
// console.log(player.innerText);
// const topLeft = boardArr[0];
// const topCenter = boardArr[1];
// const topRight = boardArr[2];
// const midLeft = boardArr[3];
// const midCenter = boardArr[4];
// const midRight = boardArr[5];
// const bottomLeft = boardArr[6];
// const bottomCenter = boardArr[7];
// const bottomRight = boardArr[8];

// if (boardArr !== undefined && boardArr[0] === 'X' && boardArr[1] === 'X' && boardArr[2] === 'X' || boardArr[0] === 'O' && boardArr[1] === 'O' && boardArr[2] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[3] === 'X' && boardArr[4] === 'X' && boardArr[5] === 'X' || boardArr[3] === 'O' && boardArr[4] === 'O' && boardArr[5] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[6] === 'X' && boardArr[7] === 'X' && boardArr[8] === 'X' || boardArr[6] === 'O' && boardArr[7] === 'O' && boardArr[8] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[0] === 'X' && boardArr[3] === 'X' && boardArr[6] === 'X' || boardArr[0] === 'O' && boardArr[3] === 'O' && boardArr[6] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[1] === 'X' && boardArr[4] === 'X' && boardArr[7] === 'X' || boardArr[1] === 'O' && boardArr[4] === 'O' && boardArr[7] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[2] === 'X' && boardArr[5] === 'X' && boardArr[8] === 'X' || boardArr[2] === 'O' && boardArr[5] === 'O' && boardArr[8] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[0] === 'X' && boardArr[4] === 'X' && boardArr[8] === 'X' || boardArr[0] === 'O' && boardArr[4] === 'O' && boardArr[8] === 'O') {
//     window.alert("Winner!");
// } else if (boardArr[2] === 'X' && boardArr[4] === 'X' && boardArr[6] === 'X' || boardArr[2] === 'O' && boardArr[4] === 'O' && boardArr[6] === 'O') {
//     window.alert("Winner!");
// } else {
//     window.alert("it was a cats game") #Alerts every click, didn't specifiy a case of undefined squares
// }
