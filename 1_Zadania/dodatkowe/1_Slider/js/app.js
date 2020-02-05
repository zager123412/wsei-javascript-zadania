document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    const prev = document.getElementById("prevPicture");
    const next = document.getElementById("nextPicture");

    const li = document.querySelector("ul").children;
    let current = 0;
    console.log(prev);
    console.log(next);
    console.log(li);
    console.log(current);

    li[current].className = "visible";

    prev.addEventListener("click", function() {
        console.log("Poprzedni");
        li[current].classList.remove("visible");
        if(current === 0) {
            current = li.length-1;
            li[current].className = "visible";

        } else {
            current--;
            li[current].className = "visible";
        }
    })
    next.addEventListener("click", function() {
        console.log("Następny");
        li[current].classList.remove("visible");
        if(current === li.length-1) {
            current = 0;
            li[current].className = "visible";

        } else {
            current++;
            li[current].className = "visible";
        }
    })
    //slier się nie zapętla, index się nadal zwiększa choć brakuje elementów listy

})
