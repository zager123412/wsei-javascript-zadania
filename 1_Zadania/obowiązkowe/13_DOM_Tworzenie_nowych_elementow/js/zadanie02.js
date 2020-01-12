<script>
    
    document.getElementsByClassName("button")[0].addEventListener("click",foo);
    function foo(){
       var tab=[];


    tab.push(document.getElementById("orderId").value);
    tab.push(document.getElementById("item").value);
    tab.push(document.getElementById("quantity").value);
    var tak=document.getElementById("orders").children[0];
    if(tab[0]==""||tab[1]==""||tab[2]==""){
        return;
    }
   var elementTr=document.createElement("tr");
    tak.appendChild(elementTr);

    for(i=0;i<3;i++){
        var node=document.createTextNode(tab[i]);
        var elementTd=document.createElement("td");
        elementTd.appendChild(node);
        tak.lastChild.appendChild(elementTd);
    }
    }
    
    </script>
