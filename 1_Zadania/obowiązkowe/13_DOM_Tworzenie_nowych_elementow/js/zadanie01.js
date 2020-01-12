<script>
var licznik=1;




document.getElementsByClassName("button")[0].addEventListener("click",foo);
function foo(){
    var tak=document.getElementsByClassName("menu")[0];

var node=document.createTextNode("Element "+licznik);
var NewElement=document.createElement("li");
NewElement.appendChild(node);
tak.appendChild(NewElement);
licznik++
console.log("tak");
}

</script>
