document.addEventListener("DOMContentLoaded", function() {
    //Zadanie #1
    console.log("Zadanie 1:");

    function getNumber(num, arr) { 
        if(arr.includes(num))
            return true;
        else
            return false;
    }
    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    //Zadanie #2
    console.log("Zadanie 2:");
    function createIdentityMatrix(rows, columns) {
        let arr = new Array();
        let oneIndex = 0;
        for(let i=0; i<columns; i++) {
            let rowArray = [];
            for(let j=0; j<rows; j++) {
                if(j === oneIndex)
                    rowArray.push(1)
                else
                    rowArray.push(0);
            }
            arr.push(rowArray);
            oneIndex++;
        }
        return arr;
    }
    console.log(createIdentityMatrix(4, 4));
    
    //Zadanie #3
    console.log("Zadanie 3:");

    function sortPlanets(planets) {
        let sorted = new Array();
        for(let i=0; i<planets.length; i++) {
            let sorts = [];
            sorts.push(planets[i].name);
            sorts.push(planets[i].numberOfMoons);
            sorted.push(sorts);
        }
        sorted.sort(function(a, b) {
            return b[1] - a[1];
        })        
    }
    console.log(sortPlanets(planets));

    //Zadanie #1 dodatkowe
    console.log("Zadanie 1 dodatkowe:");
    
    function addTheSameNumbers(num, arr) {
        let counter = null;
        arr.find(function(element) {
            if(element === num) 
                counter = counter+element;
        });
        return counter;
    }
    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10] ));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

    //Zadanie #2 dodatkowe
    console.log("Zadanie 2 dodatkowe:");

    function factors(num) {
        let table = [];
        if(num<=0) 
            return table;
        else {
            for(let i=num; i>0; i--) {
                if(num%i === 0)
                    table.push(i);
            }
            return table;
        }
    }
    console.log(factors(2));
    console.log(factors(54));
    console.log(factors(-4));

    //Zadanie #3 dodatkowe
    console.log("Zadanie 3 dodatkowe:");

    function getMissingElement(arr) {
        let num = null;
        let smallest = arr[0];
        for(let i=0; i<arr.length; i++) {
            if(arr[i] !== smallest)
                num = smallest;
            else
            smallest++;
        }
        return num;
    }
    console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
    console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));

    //Zadanie #4 dodatkowe
    console.log("Zadanie 4 dodatkowe:");

    function getLastNumbers(num, arr) {
        let last = [];
        if(Number.isInteger(num)) {
            let lastIndex = arr.length-num;
            for(let i=lastIndex; i<arr.length; i++) {
                last.push(arr[i]);
            }
            return last;
        } else
            return last;
    }

    console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
    console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
    console.log(getLastNumbers("ala", [-4, -3, -2, 0, 1, 2, 3, 4]));
})
