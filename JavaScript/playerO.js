// For Player O
function gameChecker() {

	var gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI;
	gridA = document.getElementById("gridA").value;
	gridB = document.getElementById("gridB").value;
	gridC = document.getElementById("gridC").value;
	gridD = document.getElementById("gridD").value;
	gridE = document.getElementById("gridE").value;
	gridF = document.getElementById("gridF").value;
	gridG = document.getElementById("gridG").value;
	gridH = document.getElementById("gridH").value;
	gridI = document.getElementById("gridI").value;

	// horizontal winning cases for player X
	if ((gridA == 'X') && (gridB == 'X') && (gridC == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('MORIARTY won!');
	}
	else if ((gridD == 'X') && (gridE == 'X') && (gridF == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('MORIARTY won!');
	}
	else if ((gridG == 'X') && (gridH == 'X') && (gridI == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		window.alert('MORIARTY won!');
	}
	// vertical winning cases for player X
	else if ((gridA == 'X') && (gridD == 'X') && (gridG == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('MORIARTY won!');
	}
	else if ((gridB == 'X') && (gridE == 'X') && (gridH == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('MORIARTY won!');
	}
	else if ((gridC == 'X') && (gridF == 'X') && (gridI == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		window.alert('MORIARTY won!');
	}
	// diagonal winning cases for player X
	else if ((gridA == 'X') && (gridE == 'X') && (gridI == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		window.alert('MORIARTY won!');
	}
	else if ((gridC == 'X') && (gridE == 'X') && (gridG == 'X')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('MORIARTY won!');
	}
	// horizontal winning cases for player O
	else if ((gridA == 'O') && (gridB == 'O') && (gridC == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('SHERLOCK won!');
	}
	else if ((gridD == 'O') && (gridE == 'O') && (gridF == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice Game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('SHERLOCK won!');
	}
	else if ((gridG == 'O') && (gridH == 'O') && (gridI == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		window.alert('SHERLOCK won!');
	}
	// vertical winning cases for player O
	else if ((gridA == 'O') && (gridD == 'O') && (gridG == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('SHERLOCK won!');
	}
	else if ((gridB == 'O') && (gridE == 'O') && (gridH == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('SHERLOCK won!');
	}
	else if ((gridC == 'O') && (gridF == 'O') && (gridI == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridE").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		window.alert('SHERLOCK won!');
	}
	// diagonal winning cases for player O
	else if ((gridA == 'O') && (gridE == 'O') && (gridI == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridC").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridG").disabled = true;
		document.getElementById("gridH").disabled = true;
		window.alert('SHERLOCK won!');
	}
	else if ((gridC == 'O') && (gridE == 'O') && (gridG == 'O')) {
		document.getElementById('playerTurn')
			.innerHTML = "Nice game!";
		document.getElementById("gridA").disabled = true;
		document.getElementById("gridB").disabled = true;
		document.getElementById("gridD").disabled = true;
		document.getElementById("gridF").disabled = true;
		document.getElementById("gridH").disabled = true;
		document.getElementById("gridI").disabled = true;
		window.alert('SHERLOCK won!');
	}

	// Checking of Player O finish
	// Here, Checking about Tie
	else if ((gridA == 'X' || gridA == 'O') && (gridB == 'X'|| gridB == 'O') 
		&& (gridC == 'X' || gridC == 'O') && (gridD == 'X' || gridD == 'O') 
		&& (gridE == 'X' || gridE == 'O') && (gridF == 'X' || gridF == 'O') 
		&& (gridG == 'X' || gridG == 'O') && (gridH == 'X' || gridH == 'O') 
		&& (gridI == 'X' || gridI == 'O')) {
			document.getElementById('playerTurn')
				.innerHTML = "Tied!";
			window.alert("IT'S A DRAW!");
	}
	// while the game has not been tied nor won by anyone yet
	else {

		if (flag == 1) {
			document.getElementById('playerTurn')
				.innerHTML = "MORIARTY's Turn";
		}
		else {
			document.getElementById('playerTurn')
				.innerHTML = "SHERLOCK's Turn";
		}
	}
}

function gameReset() {
	location.reload();
	document.getElementById('gridA').value = '';
	document.getElementById("gridB").value = '';
	document.getElementById("gridC").value = '';
	document.getElementById("gridD").value = '';
	document.getElementById("gridE").value = '';
	document.getElementById("gridF").value = '';
	document.getElementById("gridG").value = '';
	document.getElementById("gridH").value = '';
	document.getElementById("gridI").value = '';
}

// flag 0 sets player O as first mover/player
flag = 0;
function clickedA() {
	if (flag == 1) {
		document.getElementById("gridA").value = "X";
		gridA.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridA").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridA").value = "O";
		gridA.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridA").disabled = true;
		flag = 1;
	}
}

function clickedB() {
	if (flag == 1) {
		document.getElementById("gridB").value = "X";
		gridB.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridB").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridB").value = "O";
		gridB.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridB").disabled = true;
		flag = 1;
	}
}

function clickedC() {
	if (flag == 1) {
		document.getElementById("gridC").value = "X";
		gridC.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridC").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridC").value = "O";
		gridC.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridC").disabled = true;
		flag = 1;
	}
}

function clickedD() {
	if (flag == 1) {
		document.getElementById("gridD").value = "X";
		gridD.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridD").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridD").value = "O";
		gridD.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridD").disabled = true;
		flag = 1;
	}
}

function clickedE() {
	if (flag == 1) {
		document.getElementById("gridE").value = "X";
		gridE.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridE").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridE").value = "O";
		gridE.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridE").disabled = true;
		flag = 1;
	}
}

function clickedF() {
	if (flag == 1) {
		document.getElementById("gridF").value = "X";
		gridF.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridF").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridF").value = "O";
		gridF.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridF").disabled = true;
		flag = 1;
	}
}

function clickedG() {
	if (flag == 1) {
		document.getElementById("gridG").value = "X";
		gridG.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridG").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridG").value = "O";
		gridG.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridG").disabled = true;
		flag = 1;
	}
}

function clickedH() {
	if (flag == 1) {
		document.getElementById("gridH").value = "X";
		gridH.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridH").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridH").value = "O";
		gridH.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridH").disabled = true;
		flag = 1;
	}
}

function clickedI() {
	if (flag == 1) {
		document.getElementById("gridI").value = "X";
		gridI.style.backgroundImage = "url('moriarty.png')";
		document.getElementById("gridI").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gridI").value = "O";
		gridI.style.backgroundImage = "url('sherlock.cur')";
		document.getElementById("gridI").disabled = true;
		flag = 1;
	}
}
