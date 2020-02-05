document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    const li = document.getElementById("gallery").children;
    const hide = document.getElementById("hideButton");
    const show = document.getElementById("showButton");
    const input = document.getElementById("tagInput");
    console.log(li);
    console.log(hide);
    console.log(show);
    console.log(input);
    hide.addEventListener("click", function() {
        let text = input.value;
        let tags = [];
        for(let i=0; i<li.length; i++) {
            tags.push(li[i].getAttribute("data-tag"));
        }
        
        for(let j=0; j<tags.length; j++) {
            if(tags[j].includes(text)) {
                li[j].className ="invisible";
            }
        }
        input.value = "";
    })
    show.addEventListener("click", function() {
        let text = input.value;
        let tags = [];
        for(let i=0; i<li.length; i++) {
            tags.push(li[i].getAttribute("data-tag"));
        }
        
        for(let j=0; j<tags.length; j++) {
            if(tags[j].includes(text)) {
                li[j].classList.remove("invisible");
            }
        }
        input.value = "";
    })
    ///strona działa prawidłowo, grafiki są widzoczne, lub ukryte w zależności od wpisanego inputu
})
