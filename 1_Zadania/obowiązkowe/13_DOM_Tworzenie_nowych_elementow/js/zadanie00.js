<script>
    
    
var element=document.getElementsByClassName("deleteBtn");

for(i=0;i<tak.length;i++){
    element[i].addEventListener("click",foo);
}
function foo(){
    var fooo=this;
   fooo=fooo.parentElement.parentElement;
    fooo.parentElement.removeChild(fooo);


}

</script>
