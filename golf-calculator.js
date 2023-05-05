
let menu = false;
let name;

function openCloseMenu() {
    if (menu == true) {
    document.getElementById("menu").style.width = "20px";
    document.getElementById("menuButton").style.left = "35px";
    document.getElementById("style").style.fontSize = "0px";
    menu = false;
    console.log("menu is open " + menu);
    
    } else if (menu == false) {
    document.getElementById("menu").style.width = "240px";
    document.getElementById("menuButton").style.left = "250px";
    document.getElementById("style").style.fontSize = "35px";
    menu = true;
    console.log("menu is open " + menu);
}
}

const body = document.querySelector('*');

function openChangeStyleMenu() {
  document.getElementById("changeStyleMenu").style.display = "inline";
  openCloseMenu();
}

function enableDarkTheme() {
// Change the background color
body.style.backgroundColor = 'black';
document.getElementById("menu").style.backgroundColor = "grey";
document.getElementById("addPlayer").style.backgroundColor = "rgb(10, 115, 115)";
document.getElementById("bob").style.backgroundColor = "rgb(10, 115, 115)";
document.getElementById("changeStyleMenu").style.display = "none";
}
function enableBrightTheme() {
body.style.backgroundColor = 'white';
document.getElementById("menu").style.backgroundColor = "grey";
document.getElementById("addPlayer").style.backgroundColor = "white";
document.getElementById("bob").style.backgroundColor = "white";
document.getElementById("changeStyleMenu").style.display = "none";
}
function enableColorfulTheme() {
body.style.backgroundColor = 'black';
document.getElementById("menu").style.backgroundColor = "red";
document.getElementById("addPlayer").style.backgroundColor = "blue";
document.getElementById("addPlayer").style.color = "white";
document.getElementById("bob").style.backgroundColor = "blue";
document.getElementById("changeStyleMenu").style.display = "none";
}
function enableNormalTheme() {
body.style.backgroundColor = 'rgb(79, 200, 79)';
document.getElementById("menu").style.backgroundColor = "rgb(58, 163, 58)";
document.getElementById("addPlayer").style.backgroundColor = "rgb(79, 200, 79)";
document.getElementById("bob").style.backgroundColor = "rgb(79, 200, 79)";
document.getElementById("changeStyleMenu").style.display = "none";
}


//let counter = 0;
const players = [];

function addPlayer() {
	const playerName = document.getElementById("player-name").value;
	if (!playerName) {
		alert("Please enter a player name.");
		return;
	}

	const player = {
		name: playerName,
		score: 0
	};

	players.push(player);
	renderPlayers();
}

function removePlayer(index) {
	players.splice(index, 1);
	renderPlayers();
}

function updateScore(index, score) {
	players[index].score = score;
}

function renderPlayers() {
	const tableBody = document.getElementById("player-scores");
	tableBody.innerHTML = "";

	players.forEach((player, index) => {
		const row = document.createElement("tr");

		const nameCell = document.createElement("td");
		nameCell.textContent = player.name;
		row.appendChild(nameCell);

		const scoreCell = document.createElement("td");
		const scoreInput = document.createElement("input");
		scoreInput.type = "number";
		scoreInput.value = player.score;
		scoreInput.addEventListener("change", () => updateScore(index, scoreInput.value));
		scoreCell.appendChild(scoreInput);
		row.appendChild(scoreCell);

		const removeCell = document.createElement("td");
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.addEventListener("click", () => removePlayer(index));
		removeCell.appendChild(removeButton);
		row.appendChild(removeCell);

		tableBody.appendChild(row);
	});
}
/*newDiv.style.backgroundColor = "green";
newDiv.style.height = "80px";*/