<script>
var nie=document.getElementsByClassName("button");
for(i=0;i<nie.length;i++){
nie[i].addEventListener("click",foo);
}
function foo(){
var tak=this.getAttribute("id");
    this.parentElement.removeChild(this);
}
//działa nawet jak będzie n takich samych przycisków, usuwa dokładnie ten który został naciśnięty.

</script>
