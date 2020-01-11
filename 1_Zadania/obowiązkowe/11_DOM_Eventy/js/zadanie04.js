<script>
document.addEventListener("DOMContentLoaded",fooo);
function fooo(){
    var licznik=0;
   var tak =document.getElementsByTagName("button");
   for(i=0;i<tak.length;i++){
       tak[i].addEventListener("click",counter);
   }
   function counter(){
licznik++;
document.getElementsByClassName("counter")[0].innerHTML=licznik;
   }

}
</script>
