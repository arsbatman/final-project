document.getElementById("submit").addEventListener("click", function() {
    winner();
});

const winner = () =>
{
    let team1 = Number(document.getElementById("team11").value);
    let team2 = Number(document.getElementById("team22").value);
    var players2 = document.getElementById('player2').value.split('\n');
    var players1 = document.getElementById('player1').value.split('\n');
    if(team1==0){
            document.getElementById("team1").innerHTML = `score listTeam 2 (0)`;
        }
    else if((team2)==1){
            document.getElementById("team1").innerHTML = `score list Team 2 (1)`;
        }
        else if((team2)==2){
            document.getElementById("team1").innerHTML = `score list Team 2 (1 1), (2)`;
        }
        else if((team2)==3){
            document.getElementById("team1").innerHTML = `Score list Team 2 (1 1 1), (1 2),(3)`;
    }
    else if((team2)==4){
        document.getElementById("team1").innerHTML = `Score list Team 2 (1 1 1 1), (1 1 2), (1 3), (2 2), (4)`;
    }
    else if((team2)==5){
        document.getElementById("team1").innerHTML = `Score list Team 2 (1 1 1 1 1), (1 1 1 2), (1 1 3), (2 3), (1 4), (5)`;
    }
    else if((team2)==6){
        document.getElementById("team1").innerHTML = `Score list Team 2 (1 1 1 1 1), (1 1 1 1 2), (1 1 1 3), (1 1 4), (1 5), (2 2 2), (2 3 1), (3 3), (2 2 1 1), (4 2), (6)`;
    }
    else if((team2)==7){
        document.getElementById("team1").innerHTML = `Score list Team 2 (1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (2 2 2 1), (3 2 2), (3 3 1), (3 2 1 1),(4 2 1), (4 3), (5 2), (2 2 1 1 1)`;
    }
    if(team1==0){
                document.getElementById("team").innerHTML = `score listTeam 1 (0)`;
        }
    else if((team1)==1){
                document.getElementById("team").innerHTML = `score list Team 1 (1)`;
            }
    else if((team1)==2){
                document.getElementById("team").innerHTML = `score list Team 1 (1 1), (2)`;
            }
    else if((team1)==3){
                document.getElementById("team").innerHTML = `Score list Team 1 (1 1 1), (1 2),(3)`;
        }
        else if((team1)==4){
                document.getElementById("team").innerHTML = `Score list Team 1 (1 1 1 1), (1 1 2), (1 3), (2 2), (4)`;
            }
            else if((team1)==5){
                document.getElementById("team").innerHTML = `Score list Team 1 (1 1 1 1 1), (1 1 1 2), (1 1 3), (2 3), (1 4), (5)`;
        }
        else if((team1)==6){
                document.getElementById("team").innerHTML = `Score list Team 1 (1 1 1 1 1), (1 1 1 1 2), (1 1 1 3), (1 1 4), (1 5), (2 2 2), (2 3 1), (3 3), (2 2 1 1), (4 2), (6)`;
        }
        else if((team1)==7){
                document.getElementById("team").innerHTML = `Score list Team 1 (1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (1 6), (7), (2 2 2 1), (3 2 2), (3 3 1), (3 2 1 1),(4 2 1), (4 3), (5 2), (2 2 1 1 1)`;
        }
    if((team1||team2)>=8){
        alert("Error");
        window.location.reload();
    }
    if(team1>team2){
        document.getElementById("result").innerHTML = `The first team won`
    }
    else if(team2>team1){
        document.getElementById("result").innerHTML = `The second team won`
    }else{
        document.getElementById("result").innerHTML = `Friendship won`
    }
    if((players1.length||players1.length)>11){
        alert("Many players");
        window.location.reload();
    }else{
        console.log(players1);
        console.log(players2);
    }

}
