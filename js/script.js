{
	let playerWins = 0;
	let computerWins = 0;

	function playGame(playerInput) {
		clearMessages();

		function getMoveName(input) {
			if (input === 1) {
				return 'kamień';
			} else if (input === 2) {
				return 'papier';
			} else if (input === 3) {
				return 'nożyce';
			} else {
				return 'nieznany ruch';
			}
		}

		function displayResult(argComputerMove, argPlayerMove) {
			if (argPlayerMove === 'nieznany ruch') {
				printMessage('Nieprawidłowy ruch gracza');
			} else if (argPlayerMove === argComputerMove) {
				printMessage('Remis 🙌');
			} else if (
				(argPlayerMove === 'kamień' && argComputerMove === 'nożyce') ||
				(argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
				(argPlayerMove === 'nożyce' && argComputerMove === 'papier')
			) {
				printMessage('Ty wygrywasz 😍');
				playerWins++;
			} else {
				printMessage('Komputer wygrywa 💻');
				computerWins++;
			}
			document.getElementById('result').textContent = `Wynik: Gracz ${playerWins} - ${computerWins} Komputer`;
		}

		let computerInput = Math.floor(Math.random() * 3) + 1;
		let computerMove = getMoveName(computerInput);
		printMessage('Ruch komputera to: ' + computerMove);

		let playerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove);
	}

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});

	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});

	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});
}
