<script>
document.getElementsByClassName("button")[0].addEventListener("click",foo);
function foo(){
var id=document.getElementById("orderId").value;
var przedmiot=document.getElementById("item").value;
var liczba=document.getElementById("quantity").value;
var tak=document.getElementById("orders").children[0];

//elementy 
var elementTr=document.createElement("tr");
var elementTd=document.createElement("td");

//nody do elementu td
var nodeId=document.createTextNode(id);
var nodeP=document.createTextNode(przedmiot);
var nodeL=document.createTextNode(liczba);
//elementTr.appendChild(elementTd).appendChild(elementTd).appendChild(elementTd);


tak.appendChild(elementTr);






tak.lastChild.appendChild(elementTd.appendChild(nodeId)).parentElement.appendChild(document.createElement("td".parentElement(nodeP))).parentElement.appendChild(document.createElement("td".parentElement(nodeL)));

}

</script>
