var tak=document.getElementsByClassName("parent");
for(i=0;i<tak.length;i++){
    var hehe=i;
    tak[i].addEventListener("mouseover",fooOver);
    tak[i].addEventListener('mouseout',fooOut);
}
function fooOver(){
    this.getElementsByClassName("children")[0].style.display="block"
}
function fooOut(){
    
    this.getElementsByClassName("children")[0].style.display="none"
}
