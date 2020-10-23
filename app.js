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
    var result = document.getElementById('result');
    result.style.visibility=""; 
    console.log(result);
    button.textContent = `${turn===1?team1.name: team2.name} Shoot`;
    if(team1.goals.length ==5 && team2.goals.length==5){
        button.remove();
        result.textContent = team1.score === team2.score?`It is a draw`:`${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        turn = team1.goals.length === 5?2:team2.goals.length === 5?1:turn; 
    }
}

updateScore = ()=>{
    document.getElementById('Team-1-score').textContent = team1.score;
    document.getElementById('Team-2-score').textContent = team2.score;
    updateGoals();
}

updateName = ()=>{
    console.log("Update name called");
    document.getElementById('Team-1-name').textContent = team1.name;
    document.getElementById('Team-2-name').textContent = team2.name;
}

var handleShootButtonClick = ()=>{
    console.log("button click works");
    var goals = score[Math.floor(Math.random()*score.length)];
    console.log(goals);
    if(turn ==1)
    {
        team1.goals.push(goals);
        team1.score = calculateScore(team1.goals);
        console.log(team1.score);
    }
    else{
        team2.goals.push(goals);
        team2.score = calculateScore(team2.goals);
        console.log(team1.score);
    }
    updateButtonText();
    updateScore();
}

var calculateScore = (goals)=>{
    return goals; 
}

updateGoals = ()=>{
    var teamOneRunsElement = document.getElementById('Team-1-roundshoot').children;
    var teamTwoRunsElement = document.getElementById('Team-2-roundshoot').children;
    team1.goals.forEach((goal,index)=>{
        teamOneRunsElement[index].textContent = goal;
    })
    team2.goals.forEach((goal,index)=>{
        teamTwoRunsElement[index].textContent = goal;
    });
};