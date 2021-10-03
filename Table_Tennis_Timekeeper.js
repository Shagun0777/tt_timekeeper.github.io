const player1 = {
score : 0,
button : document.querySelector("#player1button"),
display : document.querySelector("#player1score")
}
const player2 = {
    score : 0,
    button : document.querySelector("#player2button"),
    display : document.querySelector("#player2score")
    }
const resetgamebutton = document.querySelector("#resetgame")
const setwinningScore = document.querySelector("#playupto")
let winningScore=3;
let isGameOver =false;

function updateScores(player,opponent) {
    if(!isGameOver) {
        player.score +=1;
        console.log(document.body.style.backgroundImage);
        console.log('J');
        if(player.score===winningScore) {
            isGameOver =true;
            
            document.body.style.backgroundImage = "url('https://motionarray.imgix.net/preview-152080-tFWgV91HX6-high_0008.jpg')";
            player.display.classList.add("has-text-success");
           opponent.display.classList.add("has-text-danger");
            player.button.disabled= true;
            opponent.button.disabled= true;
        }
        player.display.textContent=player.score;
    }
}

player1.button.addEventListener("click", function() {
   updateScores(player1,player2)
   
})
player2.button.addEventListener("click", function() {
    updateScores(player2,player1)
   
})
setwinningScore.addEventListener("click", function() {
    winningScore=parseInt(this.value);
    reset();
})
resetgamebutton.addEventListener("click", reset)
function reset() {
    isGameOver =false;
    document.body.style.backgroundImage ='';
    for (let p of [player1,player2]) {
p.score=0;
p.display.textContent=0;
p.display.classList.remove("has-text-success","has-text-danger");
p.button.disabled= false;

    }
}