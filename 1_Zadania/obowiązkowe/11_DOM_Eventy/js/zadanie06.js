<script>
    
    document.addEventListener("DOMContentLoaded",fooo);
     function fooo(){
     
   document.getElementsByClassName("box big")[0].addEventListener("mousemove",function(){




document.getElementById("globalX").innerHTML=event.pageX;
document.getElementById("globalY").innerHTML=event.pageY;
document.getElementById("localX").innerHTML=event.clientX-this.offsetLeft;
document.getElementById("localY").innerHTML=event.clientY-this.offsetTop;



   });
  }
  
  
</script>
