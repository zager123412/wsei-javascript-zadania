document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    //Zadanie #0
    console.log("Zadanie 0:");
    
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

    console.log(cities.map(x => x.length ));

    //Zadanie #1
    console.log("Zadanie 1:");

    function randomize(param1, param2, callback) {
        let randomNumber = Math.floor(Math.random() * (param2-param1+1) + param1);
        if(typeof callback === "function")
            callback(randomNumber);
    }

    function callback(x) {
        console.log(x);
    }

    randomize(1, 10, callback);

    //Zadanie #2
    console.log("Zadanie 2:");
    var animals = ["cat", "shrimp", "giraffe"];

    animals.forEach(animal => {
        console.log(animal);
    });

    //Zadanie #3
    console.log("Zadanie 3:");
    var years = [1995, 1856, 2014, 1987];
    var today = new Date;

    var age = years.map(x => today.getFullYear()-x );
    console.log(age);

    //Zadanie #4
    console.log("Zadanie 4:");
    var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(numbersArr.reduce( (a, b) => a + b ));
    console.log(numbersArr.reduce( (a, b) => a * b ));
})
