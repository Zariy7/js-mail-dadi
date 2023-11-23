let rollBtn = document.getElementById('rollIt');
let ulOne = document.getElementById('playerOneResults');
let ulTwo = document.getElementById('playerTwoResults');
let winner = document.getElementById('winner');

rollBtn.addEventListener('click', diceGame);

function diceGame(){
/*  let playerOneDice = Math.floor(Math.random() * 6) +1;
    let playerTwoDice = Math.floor(Math.random() * 6) +1;
    console.log(playerOneDice);
    console.log(playerTwoDice);
    
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
    } */
    let playerOneDiceN = document.getElementById('playerOne').value;
    let playerTwoDiceN = document.getElementById('playerTwo').value;

    let playerOneDice = [];
    let playerTwoDice = [];

    let playerOneSum = 0;
    let playerTwoSum = 0;

    ulOne.innerHTML = ``;
    ulTwo.innerHTML = ``;

    for(let i=0; i<playerOneDiceN; i++){
        let rolledDice = Math.floor(Math.random() * 6) +1;
        playerOneDice.push(rolledDice);
        playerOneSum += rolledDice;

        ulOne.innerHTML += `<div class="dice-red">${rolledDice}</div>`;
    }

    let ulOneChildren = ulOne.childNodes;

    for(let i=0; i<playerTwoDiceN; i++){
        let rolledDice = Math.floor(Math.random() * 6) +1;
        playerTwoDice.push(rolledDice);
        playerTwoSum += rolledDice;

        ulTwo.innerHTML += `<div class="dice-red">${rolledDice}</div>`;
    }

    let ulTwoChildren = ulTwo.childNodes;

    if(playerOneSum == playerTwoSum){
        winner.innerText = `It's a Draw!`;
    }
    else{
        if(playerOneSum > playerTwoSum){
            winner.innerText = `Player One Wins!`;
            for(i=0; i<ulOneChildren.length; i++){
                ulOneChildren[i].style.border = `5px solid lightgreen`;
            }
        }
        else{
            winner.innerText = `Player Two Wins!`;
            for(i=0; i<ulTwoChildren.length; i++){
                ulTwoChildren[i].style.border = `5px solid lightgreen`;
            }
        }
    }
}