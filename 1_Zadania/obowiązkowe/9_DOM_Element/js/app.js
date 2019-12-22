document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

});
function getDatasInfo(links){
var tak=[];
for (i=0;i<links.length;i++)
{
    tak.push(links[i].getAttribute("data-color"));
}
return tak;
}
console.log(getDatasInfo(document.querySelectorAll(".ex5 ul li")));

//zad 3
var element=document.getElementById('mainFooter');

function getId(element){
console.log(element.getAttribute("Id"));

return element.getAttribute("Id");
}
getId(element);

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
