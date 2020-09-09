(function () {

    let player;
    let pick = ["rock", "paper", "scissors","lizard","spock"];

    rock.addEventListener("click", function () {
        player = "rock";
    });

    paper.addEventListener("click", function () {
        player = "paper";
    });

    scissors.addEventListener("click", function () {
        player = "scissors";
    });

    lizard.addEventListener("click", function () {
        player = "lizard";
    });

    spock.addEventListener("click", function () {
        player = "spock";
    });


    play.addEventListener("click", function () {
        let computer = Math.floor(Math.random() * Math.floor(5))
        let computerPick = pick[computer]
        let result = document.getElementById("result")
        let playerIndex = pick.indexOf(player)
        if (computer === playerIndex) {
            result.innerHTML = "The computer picked : " + computerPick + ". Ex-aequo, try again !"
        } else if (computer =0 && playerIndex !==2 && playerIndex !==3) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        } else if (computer =1 && playerIndex !==0 && playerIndex !==4) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        } else if (computer =2 && playerIndex !==1 && playerIndex !==3) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else if (computer =3 && playerIndex !==1 && playerIndex !==4) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else if (computer =4 && playerIndex !==2 && playerIndex !==0) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else{result.innerHTML = "The computer picked : " + computerPick + ". Too bad, you loose. Try again!"}
    })

    reset.addEventListener("click", function (){
        computer="";
        player="";
        result.innerHTML ="";
    })

})();