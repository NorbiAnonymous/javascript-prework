# javascript-prework

Przygotowanie nowego projektu

Korzystając z wiedzy zdobytej w poprzednim module, przygotuj środowisko nowego projektu o nazwie javascript-prework.

    1.Stwórz na GitHubie nowe repozytorium pod nazwą javascript-prework.
    2.Sklonuj stworzone repozytorium.
    3.Skopiuj plik package.json stworzony w poprzednim module do katalogu projektu.
    4.Zainicjuj projekt za pomocą komendy npm run init-project uruchomionej w katalogu projektu.
    5.Zapisz commit i wyślij go (wykonaj push) do zdalnego repozytorium.
    6.Sprawdź w panelu GitHub czy pliki są widoczne w repozytorium.

W czasie realizacji tego modułu będziesz aktualizować pliki projektu. Efektem będzie projekt z działającą grą.

Nie martw się tym, że to jest Twoje pierwsze spotkanie z JavaScriptem. Niniejszy moduł pomoże Ci poznać podstawy. Aby było to możliwe, przygotowaliśmy dla Ciebie początkową zawartość paru plików, które ułatwią Ci uruchomienie projektu.

    index.html – zastąp zawartość swojego pliku index.html kodem przygotowanym przez nas (poniżej); umieściliśmy w nim odwołania do plików CSS oraz JS, a także podstawową strukturę HTML, z której będziemy korzystać w tym module;
    functions.js – umieść ten plik w katalogu js swojego projektu i wklej do niego zawartość podaną poniżej; znajduje się w nim kod JS niezbędny do uruchomienia przykładów z tego modułu;

Kod JS tworzony w ramach projektu będziesz umieszczać w pliku js/script.js, który został już stworzony w Twoim projekcie za pomocą komendy npm run init-project.

To wszystko, co będzie Ci potrzebne do realizacji tego modułu. Po przygotowaniu projektu zapisz nowy commit i przejdź do nauki JS-a w następnym submodule!

index.html:

<!-- <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Kamień, papier, nożyce</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		<div id="buttons"></div>
		<div id="messages"></div>
	</div>
	<script src="js/functions.js"></script>
	<script src="js/script.js"></script>
</body>
</html> -->

<!-- js/functions.js

function printMessage(msg){
let div = document.createElement('div');
div.innerHTML = msg;
document.getElementById('messages').appendChild(div);
}

function clearMessages(){
document.getElementById('messages').innerHTML = '';
} -->
