document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    const elements = document.querySelector("ul").children;
    
    for(let i=0; i<elements.length; i++) {
        let elementsChilds = [];
        if(elements[i].childElementCount>0) {
            elementsChilds = elements[i].querySelector("ul");
            elements[i].addEventListener("mouseover", function() {
                elementsChilds.style.display = "block";
                console.log("displayed");
            });
            elements[i].addEventListener("mouseout", function() {
                elementsChilds.style.display = "none";
                console.log("not displayed");
            });
        }    

    }
})
