# javascript-prework

Zadanie 1
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

---

Zadanie 2
Dokończenie logiki gry

Twoim zadaniem jest dokończenie gry tak, aby poprawnie rozpoznawała ruch komputera i człowieka, a także wyświetlała wynik rundy!

Zacznij od usunięcia całej zawartości pliku js/script.js.
Odczytanie ruchu komputera

Powyżej w jednym z zagnieżdżonych edytorów pokazaliśmy kod, który losuje liczbę od 1 do 3, i jeśli ta liczba to 1, rozpoznaje ruch jako "kamień".

Skopiuj cały kod z tego edytora do pliku js/script.js, a następnie uzupełnij go o dwa bloki else if. Powinny one obsłużyć przypadki wylosowania liczby 2 i 3. W tych sytuacjach zmienna computerMove ma otrzymać odpowiednią wartość – 'papier' lub 'nożyce'.

Po wykonaniu tej części zadania zapisz commit i wyślij go do zdalnego repozytorium.
Odczytanie ruchu gracza

Znajdź teraz edytor, w którym użyliśmy funkcji prompt do zapytania gracza o jego ruch. Skopiuj cały kod JS z tego przykładu i umieść go na końcu pliku js/script.js.

Podobnie jak wcześniej, dodaj bloki else if dla ruchów "papier" i "nożyce".

Po wykonaniu tej części zadania ponownie zapisz commit i wyślij go do zdalnego repozytorium.
Wynik gry

Na końcu pliku js/script.js dodaj teraz nowy blok if...else if...else, który wyświetli komunikat o wyniku gry.

Dla przykładu, jeśli computerMove to 'kamień', a playerMove to 'papier', powinien zostać wyświetlony komunikat "Ty wygrywasz!".

W rozwiązaniu tego zadania będzie Ci potrzebny sposób na sprawdzenie, czy spełnione są oba warunki. Najwygodniej będzie to zrobić za pomocą operatora &&, który oznacza "oraz".

if( computerMove == 'kamień' && playerMove == 'papier'){
printMessage('Ty wygrywasz!');
}

Pamiętaj, żeby obsłużyć również sytuację, gdy występuje remis, a także, kiedy playerMove jest równe nieznany ruch – taka sytuacja może mieć miejsce, jeśli gracz nie posłuchał polecenia i wpisał coś innego niż 1, 2 lub 3.

Po zakończeniu pracy znów zapisz commit i wyślij go do zdalnego repozytorium. Następnie, link do najnowszego commita wyślij do sprawdzenia.

Powodzenia!

Zadanie 3
Wykorzystanie funkcji Twoim zadaniem jest uzupełnienie i wykorzystanie funkcji getMoveName oraz displayResult w taki sposób, aby gra działała poprawnie. W uzupełnieniu deklaracji tych funkcji pomoże Ci rozwiązanie poprzedniego zadania, ponieważ przenosimy do tych funkcji logikę, którą już napisaliśmy.

Zadanie 4
Jak już zapewne się domyślasz, celem tego zadania jest dokończenie naszej gry. Na stronie umieścisz trzy guziki i napiszesz kod, który sprawi, że po kliknięciu któregoś z guzika zostanie rozegrana partia gry. Oczywiście, wybór guzika będzie jednocześnie wyborem ruchu gracza, dzięki czemu nie będzie już potrzeby wpisywania 1, 2 lub 3 w oknie prompt.
