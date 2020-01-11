<script>
var tak=document.getElementsByClassName("listContainer");
for(i=0;i<tak.length;i++){
    tak[i].addEventListener("mouseover",foo);
}
function foo(){
    tak=this.children[0].children;
    
    for(i=0;i<tak.length;i++){
        this.children[0].children[i].style.backgroundColor="green";
        
    }
    
    this.children[0].children[0].style.backgroundColor="red";
    this.children[0].children[tak.length-1].style.backgroundColor="blue";
}
</script>
