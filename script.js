(function(){

    let player;
    let pick=["rock","paper","scissors"];

    rock.addEventListener("click", function (){
        player= "rock";
    });

    paper.addEventListener("click", function (){
        player= "paper";
    });

    scissors.addEventListener("click", function (){
        player= "scissors";
    });

    play.addEventListener("click", function(){
        let computer = Math.floor(Math.random()*Math.floor(3))
        let computerPick= pick[computer]
        let result=document.getElementById("result")
        let playerIndex=pick.indexOf(player)
        if (computer === playerIndex){result.innerHTML= "The computer picked : "+computerPick+". Ex-aequo, try again !"}
        else if (computer < playerIndex && playerIndex!==2){result.innerHTML="The computer picked : "+computerPick+". Congrats, you win!"}
        else if (computer!==1){result.innerHTML= "The computer picked : "+computerPick+". Congrats, you win!"}
        else {result.innerHTML="The computer picked : "+computerPick+". Too bad, you loose. Try again !"}
    })




}) ();