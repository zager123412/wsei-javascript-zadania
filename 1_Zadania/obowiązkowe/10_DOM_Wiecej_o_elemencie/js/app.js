document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//zad 0
//1
var elements=document.getElementsByClassName('exercise ex5')[0].getElementsByTagName('li');;
for(i=0;i<elements.length;i++)
{
    if(i%2==0)
    {
elements[i].style.backgroundColor="green";
    }

    else { 
        
        continue;}
}
//3
for(i=0;i<elements.length;i++)
{
    if(i%3==0)
    {
elements[i].style.textDecoration="underline overline";
    }

    else { 
        
        continue;}
}
//console.log(elements);
// 2
elements[4].style.fontWeight="bold";


//zad 1
//edge

document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].style.backgroundImage="url('edge.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="edge";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("a")[0].innerHTML="edge";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("edge")[0].parentElement.getElementsByTagName("a")[0].href="https://www.microsoft.com/pl-pl/windows/microsoft-edge";
//firefox

document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].style.backgroundImage="url('firefox.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="firefox";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("a")[0].innerHTML="firefox";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("firefox")[0].parentElement.getElementsByTagName("a")[0].href="https://www.mozilla.org/pl/firefox/new/";
//chrome

document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].style.backgroundImage="url('chrome.png')";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("h3")[0].innerHTML="chrome";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("a")[0].innerHTML="chrome";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].parentElement.getElementsByTagName("a")[0].href="https://www.google.com/intl/pl_pl/chrome/";
document.getElementsByClassName("exercise ex1")[0].getElementsByClassName("chrome")[0].style.width="100px";
//zad 2

var imie= document.getElementById("name");
imie.innerHTML="kamil";
var kolor =document.getElementById('fav_color');
kolor.innerHTML="kamil";
var posilek =document.getElementById('fav_meal');
posilek.innerHTML="kamil";


//zad 3
//1
document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("ul")[0].classList.add("menu");
//2
var elementy =document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("li");
for(i=0;i<elementy.length;i++){
    elementy[i].classList.add("menuElement");
}
//3
var elementy =document.getElementsByClassName("exercise ex3")[0].getElementsByTagName("li");
for(i=0;i<elementy.length;i++){
    elementy[i].classList.remove("error");
}

//zad 4
var zad4=document.getElementsByClassName("exercise ex4")[0].getElementsByTagName("li");
for(i=0;i<zad4.length;i++){
zad4[i].setAttribute("data-id",i+1);
}
});


    
