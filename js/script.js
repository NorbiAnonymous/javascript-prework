{
	let playerWins = 0;
	let computerWins = 0;

	const playGame = function (playerInput) {
		clearMessages();

		const getMoveName = function (input) {
			if (input === 1) return 'kamień';
			if (input === 2) return 'papier';
			if (input === 3) return 'nożyce';
			return 'nieznany ruch';
		};

		const displayResult = function (argComputerMove, argPlayerMove) {
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
		};

		const computerInput = Math.floor(Math.random() * 3) + 1;
		const computerMove = getMoveName(computerInput);
		printMessage('Ruch komputera to: ' + computerMove);

		const playerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove);
	};

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
