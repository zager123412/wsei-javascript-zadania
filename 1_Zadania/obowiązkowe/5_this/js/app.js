//Zadanie #0
console.log("Zadanie 0:");

let car = {
    brand: "ferrari",
    color: "czerwone",
    numberOfKilometers: 0,
    printCarinfo() {
        return this.color+" "+this.brand+", "+this.numberOfKilometers+" km";
    },
    drive(distance) {
        this.numberOfKilometers = this.numberOfKilometers + distance;
    }
}

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

//Zadanie #1
console.log("Zadanie 1:");

car.overview = ["12.12.2018", "6.06.2019"];

car.overviewUpdate = function(date) {
    this.overview.push(date)
}
    
car.overviewUpdate("10.10.2019");

car.printOverview = function() {
    for(let i=0; i<this.overview.length; i++)
        console.log(this.overview[i]);
}

car.printOverview();
    
    //zad 2
    
    var calculator = {
        save: function (newA, newB) {
            this.a = newA;
            this.b = newB;
        },
    sum:function(){
    return this.a+this.b;
    },
    multiply:function(){
        return this.a*this.b;
    }
    };
    
    calculator.save(2, 3);
    console.log(calculator.sum());
    console.log(calculator.multiply());
    
    //zad 3
    var stairs={
    step:0,
    up:function(){
    this.step+=1;
    },
    down:function(){
        this.step-=1;
    },
    printStep:function(){
    console.log(this.step)
    }
    };
    stairs.up();
    stairs.up();
    stairs.up();
    stairs.down();
    stairs.printStep();
