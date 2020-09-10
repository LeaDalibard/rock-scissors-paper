(function () {

    let player;
    let pick = ["rock", "paper", "scissors","Spock","lizard"];

    rock.addEventListener("click", function () {
        player = "rock";
        rock.style.backgroundColor='#FA6528';

    });

    paper.addEventListener("click", function () {
        player = "paper";
        paper.style.backgroundColor='#FA6528';
    });

    scissors.addEventListener("click", function () {
        player = "scissors";
        scissors.style.backgroundColor='#FA6528';
    });

    lizard.addEventListener("click", function () {
        player = "lizard";
        lizard.style.backgroundColor='#FA6528';
    });

    spock.addEventListener("click", function () {
        player = "Spock";
        spock.style.backgroundColor='#FA6528';
    });


    play.addEventListener("click", function () {
        let computer = Math.floor(Math.random() * Math.floor(5))
        let computerPick = pick[computer]
        let result = document.getElementById("result")
        let playerIndex = pick.indexOf(player)
        if (computer === playerIndex) {
            result.innerHTML = "The computer picked : " + computerPick + ". Ex-aequo, try again !"
        } else if (computer ===0 && (playerIndex ===1 || playerIndex ===3)) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        } else if (computer ===1 && (playerIndex ===2 || playerIndex ===4)) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        } else if (computer ===2 && (playerIndex ===0 || playerIndex ===3)) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else if (computer ===3 && (playerIndex ===1 || playerIndex ===4)) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else if (computer ===4 && (playerIndex ===2 || playerIndex ===0)) {
            result.innerHTML = "The computer picked : " + computerPick + ". Congrats, you win!"
        }
        else{result.innerHTML = "The computer picked : " + computerPick + ". Too bad, you loose. Try again!"}
    })

    reset.addEventListener("click", function (){
        computer="";
        player="";
        computerPick ="";
        result.innerHTML ="";
        rock.style.backgroundColor='';
        paper.style.backgroundColor='';
        scissors.style.backgroundColor='';
        spock.style.backgroundColor='';
        lizard.style.backgroundColor='';

    })

})();