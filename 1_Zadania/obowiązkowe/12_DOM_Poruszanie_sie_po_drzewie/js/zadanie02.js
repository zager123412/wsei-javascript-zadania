<script>
var tak=document.getElementsByClassName("button");
for(i=0;i<tak.length;i++){
    tak[i].addEventListener("click",foo)
}
function foo(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentElement.style.backgroundColor=randomColor;
}
</script>
