<script>
    
    
var tak=document.getElementsByClassName("deleteBtn");

for(i=0;i<tak.length;i++){
    tak[i].addEventListener("click",foo);
}
function foo(){
    var nie=this;
   nie=nie.parentElement.parentElement;
    nie.parentElement.removeChild(nie);


}

</script>
