let playerOneDice = Math.floor(Math.random() * 6) +1;
let playerTwoDice = Math.floor(Math.random() * 6) +1;
/* console.log(playerOneDice);
console.log(playerTwoDice); */

if(playerOneDice == playerTwoDice){
    console.log('Draw!');
}
else {
    if(playerOneDice > playerTwoDice){
        console.log('Player One Wins!');
    }
    else {
        console.log('Player Two Wins!');
    }
}