function getMoveName(input) {
	console.log('Funkcja getMoveName została wywołana z argumentem (input)');
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

console.log('getMoveName(2):', getMoveName(2));

//Dodanie Wynik gry Remis Logika
function displayResult(argComputerMove, argPlayerMove) {
	console.log('Funkcja displayResult została wywołana z argumentami (argComputerMove, argPlayerMove)');
	console.log('moves: ', argComputerMove, argPlayerMove); //Debug sprawdzenie czy funkcja się wykonuje! dodać wszędzie i sprawdzić !

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
		console.log('if - Wygrana Gracza');
	} else {
		printMessage('Komputer wygrywa 💻');
		console.log('else - Wygrana Komputera');
	}
}

// Odczytanie ruchu komputera
let computerInput = Math.floor(Math.random() * 3) + 1;
console.log('Wylosowana liczba');
// let computerMove = getMoveName(randomNumber);

// if (computerInput === 1) {
// 	computerMove = 'kamień';
// } else if (computerInput === 2) {
// 	computerMove = 'papier';
// } else if (computerInput === 3) {
// 	computerMove = 'nożyce';
// }

let computerMove = getMoveName(computerInput);
console.log('Ruch Komputera');
printMessage('Ruch komputera to: ' + computerMove);

// Odczytanie ruchu gracza
let playerInput = Number(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')); //Number (Zapamiętaj z dużej litery) - zamienia ten tekst (string) na prawdziwą liczbę (number) dlatego mogę użyć === zamiast ==
console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';

// if (playerInput === '1') {
// 	playerMove = 'kamień';
// } else if (playerInput === '2') {
// 	playerMove = 'papier';
// } else if (playerInput === '3') {
// 	playerMove = 'nożyce';
// }

let playerMove = getMoveName(playerInput);
console.log('Ruch gracza');
printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);


