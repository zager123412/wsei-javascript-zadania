document.addEventListener("DOMContentLoaded", function() {
    
    const span = document.querySelectorAll("span");
    const li = document.querySelectorAll("li");

    for(let i=0; i<li.length; i++)
        li[i].style.display = "none";

    for(let j=0; j<span.length; j++) {
        span[j].addEventListener("mouseover", () => {
            const childs = span[j].parentElement.getElementsByTagName("li");
            for(let k=0; k<childs.length; k++)
                childs[k].style.display = "block";
        })
        span[j].addEventListener("mouseout", () => {
            const childs = span[j].parentElement.getElementsByTagName("li");
            for(let l=0; l<childs.length; l++)
                childs[l].style.display = "none";
        })
    }
})
