
let HumanScore = 0, ComputerScore = 0, numDraws = 0;

    function getComputerChoice() {
        let x = Math.floor(Math.random()*3)+1;        
        return x;
    };

    function roundIssue(compRes,humRes,draw) {
        let container = document.querySelector('#resultTab');
        container.textContent = "";
        let resultTab = document.createElement("p");
        container.appendChild(resultTab);
        resultTab.textContent = `Computer Score: ${compRes} 
                                Human Score: ${humRes}
                                Draws: ${draw}`;  
    }
    
    
    function playRound(human,computer) {
        switch (human) {
            case 1: {
                if (computer===1) {
                    numDraws+=1;
                    ;
                } else if (computer===2) {
                    ComputerScore+=1;
                } else {
                    HumanScore+=1;
                }
                roundIssue(ComputerScore,HumanScore,numDraws)
            }
            break;
            case 2: {
                if (computer===2) {
                    numDraws+=1;
                } else if (computer===3) {
                    ComputerScore+=1;
                } else {
                    HumanScore+=1;
                }
                roundIssue(ComputerScore,HumanScore,numDraws)
            } 
            break;
            case 3: {
                if (computer===3) {
                    numDraws+=1;
                } else if (computer===1) {
                    ComputerScore+=1;
                } else {
                    HumanScore+=1;
                }
                roundIssue(ComputerScore,HumanScore,numDraws)
            }
            break;
        }
        if (ComputerScore == 5){
            let container = document.querySelector('#resultTab');
            container.textContent = "";
            let resultTab = document.createElement("p");
            container.appendChild(resultTab);
            resultTab.textContent = "Computer wins";
            HumanScore = 0, ComputerScore = 0, numDraws = 0;
        } else if (HumanScore == 5) {
            let container = document.querySelector('#resultTab');
            container.textContent = "";
            let resultTab = document.createElement("p");
            container.appendChild(resultTab);
            resultTab.textContent = "Human wins";
            HumanScore = 0, ComputerScore = 0, numDraws = 0;
        }
    }

    
    const Rock = document.querySelector("#Rock");
    Rock.addEventListener("click",() => playRound(1,getComputerChoice()));
    const Paper = document.querySelector("#Paper");
    Paper.addEventListener("click",() => playRound(2,getComputerChoice()));
    const Scissors = document.querySelector("#Scissors");
    Scissors.addEventListener("click",() => playRound(3,getComputerChoice()));