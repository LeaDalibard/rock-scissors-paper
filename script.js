(function(){

    let player;
    let computer;
    let pick=["rock","paper","scissors"];

    rock.addEventListener("click", function (){
        player= pick[0];
    });

    paper.addEventListener("click", function (){
        player= pick[1];
    });

    scissors.addEventListener("click", function (){
        player= pick[3];
    });

    play.addEventListener("click", function(){
        let random = Math.floor(Math.random()*Math.floor(3))

        computer=pick[random];
        if (computer == player){}
    })




}) ();