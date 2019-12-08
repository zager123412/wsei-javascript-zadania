
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji
function sortArray() {

    //deklaracja tablicy ...
    var points = [41, 3, 6, 1, 114, 54, 64];

    //posortowanie elementów tablicy w porządku alfabetycznym
    points.sort(function (a, b) {
        //zwraca (a-b)
        return a - b;
    });

    //funkcja zwraca tablicę
    return points;
}

//inicjalizacja funkcji 
sortArray();
