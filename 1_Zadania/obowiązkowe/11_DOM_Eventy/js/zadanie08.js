<script>

    document.addEventListener("DOMContentLoaded",fooo);
    document.getElementById("windowWidth").innerHTML=window.innerHeight;
    document.getElementById("windowHeight").innerHTML=window.innerWidth;
    function fooo(){
        window.addEventListener("resize",function(){
            document.getElementById("windowWidth").innerHTML=window.innerHeight;
            document.getElementById("windowHeight").innerHTML=window.innerWidth;
     
    });
    }
    </script>
