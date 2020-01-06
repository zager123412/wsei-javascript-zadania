document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //zad 0
function getDatasInfo(links){
var tak=[];
for(i=0;i<links.length;i++){
    tak.push(links[i].getAttribute("data-color"));
}
console.log(tak);
return tak;
    }

//zad 1
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

console.log("tagName: "+homeElement.tagName+" className: "+homeElement.className);
for(i=0;i<childElements.length;i++)
{
    console.log("className: "+childElements[i].className +" tagName: "+childElements[i].tagName);
    }
console.log("className: "+banner.className+" tagName: "+banner.tagName);
for(i=0;i<childElements.length;i++)
{
    console.log("className: "+blocks[i].className+" tagName: "+blocks[i].tagName);
    }
for(i=0;i<childElements.length;i++)
{
    console.log("className: "+links[i].className+" tagName: "+links[i].tagName);
    }
    
// zad 2
var blocks = document.querySelectorAll(".block");
for(i=0;i<blocks.length;i++)
{
    console.log("Innerhtml"+blocks[i].innerHTML);
    console.log("outerhtml"+blocks[i].outerHTML);
}
for(i=0;i<blocks.length;i++){
blocks[i].innerHTML="Nowa wartość diva o klasie blocks";
}
for(i=0;i<blocks.length;i++)
{
    console.log("Innerhtml"+blocks[i].innerHTML);
    console.log("outerhtml"+blocks[i].outerHTML);
}

//zad 3
   
var foo=document.getElementById("mainFooter");

    function getId(foo){
       
        return foo.id;
    }
    getId(foo);


//zad 4
var childElements = document.querySelector(".oferts").children;
function getTags(childElements){
var tak=[];
for(i=0;i<childElements.length;i++){
    tak.push(childElements[i]);
}
return tak;
}
getTags(childElements);

//zad 5
var banner = document.querySelector(".ban");

function getClassInfo(banner){
    console.log(banner);
var tak1=[];
for(i=0;i<banner.length;i++)
{
    tak1.push(banner[i]);
}
return tak1;

}
console.log(getClassInfo());


//zad 6
var elementy=document.getElementsByTagName("nav")[0].getElementsByTagName("li");

function setDataDirection(elementy){
    for(i=0;i<elementy.length;i++){
        elementy[i].setAttribute('data-direction','top'); //('nazwa atrybutu','tekst atrybutu')
    }
}
setDataDirection(elementy);

});
