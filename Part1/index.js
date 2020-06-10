// Step 1 //
// const name = "Aaron";
// console.log(name);



function play(clickedId) {
    console.log(clickedId)
    const clickedElement = document.getElementById(clickedId);
    const playerSpan = document.getElementById('player');
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
    }   else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
    }
}


// console.log(document.getElementById('test'));
// console.log(player.innerText);