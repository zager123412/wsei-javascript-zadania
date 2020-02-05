//Zadanie #2.1
console.log("Zadanie 2.1:");
const menu = document.getElementById("menu");

function getDataInfo(element) {
    let newArr = [];
    for(let i=0; i<element.children.length; i++)
        newArr.push(element.children[i].getAttribute("data-info"))
    return newArr;
}
console.log(getDataInfo(menu));

//Zadanie #2.2
console.log("Zadanie 2.2:");
const el = document.getElementById("main-contener");

const getElementClass = (element) => element.classList;
console.log(getElementClass(el));

//Zadanie #2.3
console.log("Zadanie 2.3:");
const pink = document.getElementsByClassName("pink-color")[0];

const getElementText = (element) => element.textContent;
console.log(getElementText(pink));

//Zadanie #2.4
console.log("Zadanie 2.4:");
const images = document.getElementsByClassName("images");

function getElementsAlt(element) {
    let alts = [];
    for(let i=0; i<element.length; i++)
        alts.push(element[i].alt);
    return alts;
}
console.log(getElementsAlt(images));

//Zadanie #2.5
console.log("Zadanie 2.5:");
const links = document.getElementsByClassName("my-link");

function getElementHref(element) {
    let hrefs = [];
    for(let i=0; i<element.length; i++)
        hrefs.push(element[i].href);
    
    return hrefs;
}
console.log(getElementHref(links));
