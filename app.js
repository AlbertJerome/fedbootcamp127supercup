let score = [0,1];
console.log(score);
var turn;
var team1 ={
    name:"RMA",
    goals:[],
    score:0
};
console.log(team1);
var team2 = {
    name:"SEV",
    goals:[],
    score:0
};
console.log(team2);

window.onload = ()=>{
    selectTurn();
    updateButtonText();
    updateScore();
    updateName();
};

selectTurn=()=>{
console.log("select turn");
turn = Math.round(Math.random())+1;
console.log(turn);
};

updateButtonText =()=>{
    var button = document.getElementById('shoot-button');
    console.log(button);
    button.textContent = `${turn===1?team1.name: team2.name} Shoot`;
}

updateScore = ()=>{
    document.getElementById('Team-1-score').textContent = team1.score;
    document.getElementById('Team-2-score').textContent = team2.score;
}

updateName = ()=>{
    document.getElementById('Team-1-name').textContent = team1.name;
    document.getElementById('Team-2-name').textContent = team2.name;
}