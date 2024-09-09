let i=1;
let HumanScore = 0, ComputerScore = 0, numDraws = 0;

while (i<6) {
    function getComputerChoice() {
        let x = Math.floor(Math.random()*3)+1;        
        return x;
    };
    function getHumanChoice() {
        let choice = prompt("Rock? Paper? Scissors?");
        choice = choice.toUpperCase();
        switch (choice) {
            case "ROCK": return 1;
            case "PAPER": return 2;
            case "SCISSORS": return 3;
        }
    }

    function playRound(human,computer) {
        switch (human) {
            case 1: {
                if (computer===1) {
                    numDraws+=1;
                    console.log("That's a draw");
                } else if (computer===2) {
                    ComputerScore+=1;
                    console.log("The computer wins the round!");
                } else {
                    HumanScore+=1;
                    console.log("The human wins the round!");
                }
            }
            break;
            case 2: {
                if (computer===2) {
                    numDraws+=1;
                    console.log("That's a draw");
                } else if (computer===3) {
                    ComputerScore+=1;
                    console.log("The computer wins the round!");
                } else {
                    HumanScore+=1;
                    console.log("The human wins the round!");
                }
            } 
            break;
            case 3: {
                if (computer===3) {
                    numDraws+=1;
                    console.log("That's a draw");
                } else if (computer===1) {
                    ComputerScore+=1;
                    console.log("The computer wins the round!");
                } else {
                    HumanScore+=1;
                    console.log("The human wins the round!");
                }
            }
            break;
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    i+=1;
}

console.log(`Human wins : ${HumanScore}
Computer wins : ${ComputerScore}
Number of draws : ${numDraws}`)