<script >
    var tak=document.getElementsByClassName("button");

    for(i=0;i<tak.length;i++)
    {
      tak[i].addEventListener("click",foo);
    }
    function foo(){
        if(this.nextElementSibling.style.visibility=="hidden"){
    this.nextElementSibling.style.visibility="visible";}
    else{this.nextElementSibling.style.visibility="hidden"}
    }

    
    </script>
