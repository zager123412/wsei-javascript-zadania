document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
//zad 0
        var elements=document.getElementsByClassName("title")[0];
        function getDataAnimation(elements){
var foo=elements.getAttribute("data-animation");
return foo;
        }
        
        //zad 1
var elements1=document.getElementById("home");
function tak(){
var elements2=document.querySelectorAll("li")
for(i=0;i<elements2.length;i++){
    if(elements2[i].hasAttribute("data-direction")==true)
    {
return elements2[i];
    }
}
}
var elements3=document.getElementsByClassName("block");
console.log(elements1);
console.log(tak());
console.log(elements3[0]);

//zad 2
var elements=document.getElementsByTagName("nav")[0].querySelectorAll("li");
console.log(elements);

var elements1=document.getElementsByTagName("div");
var tab=[];
for(i=0;i<elements1.length;i++)
{
    if(elements1[i].querySelectorAll("p").length==1){
    tab.push(elements1[i].querySelectorAll("p"));
    }
    else continue;
}
elements1=tab;
console.log(elements1);

var elements=document.getElementsByTagName("article");
var tab=[]
for(i=0;i<elements.length;i++){

tab.push(elements[i].querySelectorAll("div"));

}
console.log(tab);






//zad 3
var element=document.getElementsByTagName("article");

for(i=0;i<element.length;i++)
{
    if(element[i].getElementsByClassName("first").length>=0){
        
element=element[i];

    }
}
console.log(element.querySelectorAll("h1").length);
});
