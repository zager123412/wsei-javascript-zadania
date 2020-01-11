<script>
document.addEventListener("DOMContentLoaded",fooo);
function fooo(){
    var licznik1=0;
    var licznik2=0;
    var licznik3=0;


    document.getElementById("button1").addEventListener("click",function(){
    licznik1++;
    document.getElementsByClassName("counter")[0].innerHTML=licznik1; });
    document.getElementById("button2").addEventListener("click",function(){
    licznik2++;
    document.getElementsByClassName("counter")[1].innerHTML=licznik2; });
    document.getElementById("button3").addEventListener("click",function(){
    licznik3++;
    document.getElementsByClassName("counter")[2].innerHTML=licznik3; });

}
</script>
