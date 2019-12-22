document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

});


    //zad 0
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
for(i=0;i<elements.length;i++)
{
    if(i%3==0)
    {
elements[i].style.textDecoration="underline overline";
    }

    else { 
        
        continue;}
}
console.log(elements);

elements[4].style.fontWeight="bold";

//zad 2
document.getElementById("name").innerHTML="kamil";
document.getElementById('fav_color').innerHTML="kamil";
document.getElementById('fav_meal').innerHTML="kamil";


//zad 4
var tak=document.getElementsByClassName('exercise ex4')[0].getElementsByTagName('li');
for(i=0;i<tak.length;i++)
{
tak[i].dataset.id=i+1;

}
