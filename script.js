var r = 1;
var l = 1;
var h = 0;
var level = "easy";
var multiplayer = "off";
var turn = "X"; /* Who's turn it is */
const grid_n = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"]; /* Assigns each box a number 0-8; use grid_n[n] to get the id of the box that is represented by the number */
const weights = [2, 1, 2, 1, 3, 1, 2, 1, 2]; // The # of lines; corners have more than edges; centers have more than corners, so edges = 1, corners = 2, centers = 3

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        document.getElementById('r' + i + 'c' + j).onclick = function() {
            if (multiplayer == "off") {
                if (this.innerHTML == "") {
                    this.innerHTML = 'X';
                    r = 1;
                    h += 1;
                    checkWinner();
                    if (r == 3 && h != 9) {
                        computerTurn();
                        checkWinner();
                    }
                }
            } else {
                if (this.innerHTML == "") {
                    this.innerHTML = turn;
                    r = 1;
                    h += 1;
                    checkWinner()
                    if (r == 3 && h != 9) {
                        if (turn == "X") {
                            turn = "O";
                        } else {
                            turn = "X";
                        }
                    }
                }
            }
        }
    }
}

function computerTurn() {
    r = 1
    if (level === "easy") {
        var result = Math.floor(Math.random() * 9);
        var box = document.getElementById(grid_n[result]);
        if (box.innerHTML === "") {
            box.innerHTML = "O";
            h += 1;
            checkWinner();
        } else {
            computerTurn()
        }
    } else if (level === "medium") {
        let highestWeight = 0;
        let highestWeightIndex = -1;
        
        // Find index with the highest weight
        for(let i = 0; i < weights.length; i++) {
            if(weights[i] > highestWeight && document.getElementById(grid_n[i]).innerHTML === "") {
                highestWeight = weights[i];
                highestWeightIndex = i;
            }
        }
        
        document.getElementById(grid_n[highestWeightIndex]).innerHTML = "O";
    } else if (level === "difficult") {

    }
}

function checkWinner() {
    // TODO: Turn this into an array
    var letterxr1 = 0;
    var letteror1 = 0;
    var letterxc1 = 0;
    var letteroc1 = 0;
    var letterxd1 = 0;
    var letterod1 = 0;
    var letterxd2 = 0;
    var letterod2 = 0;
    var winner = ""
    for (i = 1; i < 4; i++) {

        if (document.getElementById("r" + i + "c" + r).innerHTML == "X" || document.getElementById("r" + i + "c" + r).innerHTML == "O") {
            if (document.getElementById("r" + i + "c" + r).innerHTML == "X") {
                letterxr1 += 1
                if (letterxr1 == 3) {
                    winner = "X";
                }
            } else {
                letteror1 += 1
                if (letteror1 == 3) {
                    winner = "O";
                }
            }
        }
        if (document.getElementById("r" + r + "c" + i).innerHTML == "X" || document.getElementById("r" + r + "c" + i).innerHTML == "O") {
            if (document.getElementById("r" + r + "c" + i).innerHTML == "X") {
                letterxc1 += 1
                if (letterxc1 == 3) {
                    winner = "X";
                }
            } else {
                letteroc1 += 1
                if (letteroc1 == 3) {
                    winner = "O";
                }
            }
        }

        if (document.getElementById("r" + i + "c" + i).innerHTML == "X" || document.getElementById("r" + i + "c" + i).innerHTML == "O") {
            if (document.getElementById("r" + i + "c" + i).innerHTML == "X") {
                letterxd1 += 1;
                if (letterxd1 == 3) {
                    winner = "X";
                }
            } else {
                letterod1 += 1
                if (letterod1 == 3) {
                    winner = "O";
                }
            }
        }

    }
    if (document.getElementById("r" + 3 + "c" + 1).innerHTML == "X" && document.getElementById("r" + 2 + "c" + 2).innerHTML == "X" && document.getElementById("r" + 1 + "c" + 3).innerHTML == "X" || document.getElementById("r" + 3 + "c" + 1).innerHTML == "O" && document.getElementById("r" + 2 + "c" + 2).innerHTML == "O" && document.getElementById("r" + 1 + "c" + 3).innerHTML == "O") {
        if (document.getElementById("r" + 3 + "c" + 1).innerHTML == "X") {
            winner = "X";
        } else {
            winner = "O";
        }
    }

    switch(winner) {
        case "X": {
            document.getElementById('id01').style.display = 'block';
            document.getElementById("title").innerHTML = "X wins";
            break;
        }
        case "O": {
            document.getElementById('id01').style.display = 'block';
            document.getElementById("title").innerHTML = "O wins";
            break;
        }
        default: {
            if (r != 3) {
                r += 1;
                checkWinner();
            } else if (h == 9) {
                document.getElementById('id01').style.display = 'block';
                document.getElementById("title").innerHTML = "Tie";
            }
        }
    }
}

function clearBoard() {
    for (i = 1; i < 4; i++) {
        document.getElementById("r" + i + "c" + l).innerHTML = "";
    }
    if (l != 3) {
        l += 1;
        clearBoard();
    }
}

function playAgain(diff) {
    level = diff;
    multiplayer = "off";
    l = 1;
    h = 0;
    r = 1;
    clearBoard();
    winner = "";
    document.getElementById('id01').style.display = '';
    turn = "X";
}

function multiPlayer() {
    playAgain("easy");
    multiplayer = "on";
}
window.onload = function() {
    document.getElementById('id01').style.display = 'block';
}
