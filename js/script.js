// let computerMove = 'kamień';
// let playerMove = 'papier';

// printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');

// //document.write służy do - wyświetlenia napisu na stronie. Ta funkcja dodaje podany jej tekst lub kod HTML na końcu body

// //print Message - Będzie nam zależało, aby tekst był dodawany w konkretnym divie

// //Wywołanie Funkcji
// //uruchamia funkcję printMessage,
// //przekazuje tej funkcji tekst, który ma zostać wyświetlony.

// if (computerMove === 'kamień' && playerMove === 'papier') {
// 	printMessage('Ty wygrywasz');
// }

// printMessage('<br>'); //Pusta linia

// //console.log('Witaj gracza!') //Wypisuje tekst w konsoli deweloperskiej
// //document.write('Witaj gracza!') //Wypisuje tekst bezpośrednio na stronie -Niezalecana forma
// //printMessage('Witaj gracza!'); //Pokazuje coś użytkownikowi, nie tylko w konsoli
// //alert('Witam hehe 😂:)'); // Alert Pokazuje wyskakujące okienko (popup) z komunikatem.

// // Math.random
// let randomFraction = Math.random();
// printMessage('Wylosowany ułamek to: ' + randomFraction);

// let calculation = randomFraction * 3 + 1;
// printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

// let roundNumber = Math.floor(calculation);
// printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

// //
// printMessage('<br>'); //Pusta linia

// //let randomNumber = Math.floor(Math.random() * 3 + 1);
// //Ćwiczenie Zmień powyższy kod tak, aby dodatkowo losował liczbę całkowitą od 11 do 19

// //let randomNumber = Math.floor(Math.random()) * 9 + 11; - zły zapis wynik to 11 zawsze
// let randomNumber = Math.floor(Math.random() * 9) + 11; // 9 musi być w nawiasie Kolejność!!!
// printMessage('Wylosowana liczba od 11 do 19 to: ' + randomNumber);

// printMessage('<br>'); //Pusta linia

// // 1.Ćwiczenie z if else

// if (1 > 2) {
// 	printMessage('Niesamowite! Jeden jest większe niż dwa!!!'); // Komunikat się nie wyświetla Bo jest to zdanie Fałszywe Muszę to zapamiętać !
// } else {
// 	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.'); // Komunikat się wyświetli bo jest to zdanie prawdziwe
// }

// printMessage('<br>'); //Pusta linia
// // 2.Ćwiczenie z if else

// if (1 > 2) {
// 	printMessage('Niesamowite jeden jest większe niż dwa!!!');
// } else if (1 === 2) {
// 	printMessage('Dziwne jeden jest równe dwa? wtfhehe');
// } else {
// 	printMessage('Wszystko po staremu jeden jest mniejsze niż dwa.');
// }

// //Można stosować wiele bloków else if, a dopiero na końcu można (ale nie trzeba) użyć bloku else. Pamiętaj, że jeśli spełniony zostanie pierwszy warunek (1 > 2), to drugi w ogóle nie zostanie sprawdzony. Tylko kiedy pierwszy warunek będzie fałszywy, sprawdzony zostanie drugi (1 == 2). Jeśli on też będzie fałszywy, zostanie wykonany kod w bloku else.

// // = Operator Przypisania
// // == Operator Porównania Wartość Luźne
// // === Operator Porównania Wartość i Typ Ścisłe -- Zalecane! używać tylko tego zazwyczaj

// printMessage('<br>');
// //3.Ćwiczenie Łączymy losowanie i logikę warunkową

// let randomNumbers = Math.floor(Math.random() * 3 + 1);
// console.log('Wylosowana liczba to:' + randomNumbers);

// let computerMoves = 'nieznany ruch';
// if (randomNumbers === 1) {
// 	computerMoves = 'kamień';
// }

// printMessage('Mój ruch to: ' + computerMoves);

// printMessage('<br>');
// //4.Ćwiczenie Zapisywanie odpowiedzi gracza

// Zadanie: Dokończenie logiki gry

// Odczytanie ruchu komputera
let computerInput = Math.floor(Math.random() * 3) + 1;
let computerMove = 'nieznany ruch';

if (computerInput === 1) {
	computerMove = 'kamień';
} else if (computerInput === 2) {
	computerMove = 'papier';
} else if (computerInput === 3) {
	computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);

// Odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput === '1') {
	playerMove = 'kamień';
} else if (playerInput === '2') {
	playerMove = 'papier';
} else if (playerInput === '3') {
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

//Dodanie Wynik gry Remis Logika
if (playerMove === 'nieznany ruch') {
	printMessage('Nieprawidłowy ruch gracza');
} else if (playerMove === computerMove) {
	printMessage('Remis 🙌');
} else if (
	(playerMove === 'kamień' && computerMove === 'nożyce') ||
	(playerMove === 'papier' && computerMove === 'kamień') ||
	(playerMove === 'nożyce' && computerMove === 'papier')
) {
	printMessage('Ty wygrywasz 😍');
} else {
	printMessage('Komputer wygrywa 💻');
}
