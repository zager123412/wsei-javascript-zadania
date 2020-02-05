document.addEventListener("DOMContentLoaded", function() {
    const contentArr = document.getElementsByClassName("content");
    const headers = document.querySelectorAll("a");

    headers[0].addEventListener("click", function() {
        if(contentArr[0].style.display === "block")
            contentArr[0].style.display = "none";
        else
            contentArr[0].style.display = "block";
    })
    headers[1].addEventListener("mouseenter", function() {
        contentArr[1].style.display = "block";
    })
    headers[1].addEventListener("mouseleave", function() {
        contentArr[1].style.display = "none";
    })
})
