var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

//Aby wykryć czy dokument został wczytany, korzystam ze zdarzenia DOMContentLoaded:
//bez dodanie tego eventu nasz skrypt działa na niewczytanym dokumencie co powoduje błąd.
