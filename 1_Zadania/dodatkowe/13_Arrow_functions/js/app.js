//Zadanie #01
console.log("Zadanie 01:");
PrintHello = () => { console.log("Hello World") };
PrintHello();

//Zadanie #02
console.log("Zadanie 02:");

Double = (number=2) => { return number*number };
console.log(Double());
console.log(Double(5));

//Zadanie #03
console.log("Zadanie 03:");
Bigger = (num1, num2) => { if(num1>num2) return num1; else if(num2>num1) return num2; else return "Equal" };
console.log(Bigger(3, 5));

//Zadanie #04
console.log("Zadanie 04:");

getSecondMaxNumber = (array) => {
    let tempArray = array;
     const max = Math.max.apply(Math, tempArray);
     const index = tempArray.indexOf(max);
     tempArray.splice(index, 1);
     return Math.max.apply(Math, tempArray);
    };

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));

//Zadanie #05
console.log("Zadanie 05:");
let func = (function(parametr) {
    return {
        getParametr: function(){
            return parametr;
        }
    }
})("I'm IIFE");

console.log(func.getParametr());

require("./zadanie07.js");

require("./zadanie08.js");

require("./zadanie09.js");

//Zadanie #06
console.log("Zadanie 06:");

Counting = (num = 1) => {
    var start = 1;
    if(num <= 0 || num >= 11)
        return "Enter number between 1 and 10";
    else {
        window.setInterval(count = () => {
                if(start > num)
                    window.clearInterval();
                else {
                    console.log("Hello"+start);
                    ++start;
                }
        }, 1000);

    }
}

Counting(5);
