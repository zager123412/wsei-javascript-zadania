<script>
var tak=document.getElementsByClassName("moveBtn");
for(i=0;i<tak.length;i++)
{
    tak[i].addEventListener("click",foo)
}

function foo(){
 var klon=this.parentElement.cloneNode(true);
 console.log(this.parentElement.parentElement.getAttribute("id"));
if(this.parentElement.parentElement.getAttribute("id")=="list2")
{
this.parentElement.parentElement.parentElement.previousElementSibling.children[0].appendChild(klon);
this.parentElement.parentElement.removeChild(this.parentElement);

var tak=document.getElementsByClassName("moveBtn");
for(i=0;i<tak.length;i++)
{
    tak[i].addEventListener("click",foo)
}
}
else{
this.parentElement.parentElement.parentElement.nextElementSibling.children[0].appendChild(klon);
this.parentElement.parentElement.removeChild(this.parentElement);

var tak=document.getElementsByClassName("moveBtn");
for(i=0;i<tak.length;i++)
{
    tak[i].addEventListener("click",foo)
}
}


}
</script>
