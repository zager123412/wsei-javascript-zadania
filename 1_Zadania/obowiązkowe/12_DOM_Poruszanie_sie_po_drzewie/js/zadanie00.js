<script>
console.log(document.getElementsByClassName("first")[0].children[0].children[2]);
console.log(document.getElementById("second").parentElement.children[3]);
var tak=document.querySelectorAll('[data-ex="third"]')[0].parentElement.parentElement.children;

tak=tak[tak.length-1].children[0].children;

console.log(tak[Math.floor(tak.length/2)]);


console.log(document.getElementsByClassName("forth")[0].parentElement.getElementsByTagName("article")[0].getElementsByTagName("p")[1]);


</script>
