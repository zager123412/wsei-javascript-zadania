<script>
    
    document.addEventListener("DOMContentLoaded",fooo);
     function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function fooo(){
     
   document.getElementsByClassName("box big")[0].addEventListener("click",function(){
//miało być po najechaniu na element ale uznałem że lepszym wyjściem bedzie na event click 
//


document.getElementById("globalX").innerHTML=event.pageX;
document.getElementById("globalY").innerHTML=event.pageY;
document.getElementById("localX").innerHTML=event.clientX-this.offsetLeft;
document.getElementById("localY").innerHTML=event.clientY-this.offsetTop;



   });
  }
  
  
</script>
