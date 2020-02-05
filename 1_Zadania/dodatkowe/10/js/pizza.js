const checkboxArr = document.getElementsByClassName("checkbox");
const price = document.getElementById("price");
const submit = document.getElementsByClassName("btn")[0];
let counter = 0.00; //follows current price

//first checkbox(all)
checkboxArr[0].children[0].firstChild.addEventListener("change", function() {
    if(this.checked === true) {
        for(let i=0; i<checkboxArr.length; i++) {
            if(i===checkboxArr.length-1)
                checkboxArr[i].children[0].firstChild.checked = false;
            else {
                checkboxArr[i].children[0].firstChild.checked = true;
                    if(i !== 0)
                        counter = parseFloat(counter) + parseFloat(checkboxArr[i].children[0].firstChild.getAttribute("data-price"));
            }
        }
        counter = counter.toFixed(2);
        let text = document.createTextNode(''+counter+'zł');
        price.replaceChild(text, price.firstChild);

    }
})
//last checkbox(none)
checkboxArr[checkboxArr.length-1].children[0].firstChild.addEventListener("change", function() {
    for(let i=0; i<checkboxArr.length; i++)
            checkboxArr[i].children[0].firstChild.checked = false;
        
        counter = 0.00;
        let text = document.createTextNode(''+counter+'zł');
        price.replaceChild(text, price.firstChild);
})
//ingredients checkbox //po kliknięciu w drugi składnik counter wysiada is not a function
for(let i=1; i<checkboxArr.length-1; i++) {
    checkboxArr[i].children[0].firstChild.addEventListener("change", function() {
        if(checkboxArr[i].children[0].firstChild.checked === true) {
            counter = parseFloat(counter) + parseFloat(this.getAttribute("data-price"));
            counter = counter.toFixed(2);
            let text = document.createTextNode(''+counter+'zł');
            price.replaceChild(text, price.firstChild);
        } else {
            counter = parseFloat(counter) - parseFloat(this.getAttribute("data-price"));
            counter = counter.toFixed(2);
            let text = document.createTextNode(''+counter+'zł');
            price.replaceChild(text, price.firstChild);
        }
    })
}
submit.addEventListener("click", function() {
        alert("Do zapłaty: "+counter+" zł");
})
