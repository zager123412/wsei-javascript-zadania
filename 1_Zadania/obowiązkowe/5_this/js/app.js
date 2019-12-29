//zad 0
var car={
    brand:"audi",
    color:"black",
    numberOfKilometers:0,
    printCarinfo(){
        console.log(this.brand);
        console.log(this.color);
        console.log(this.numberOfKilometers);
    },
    drive(km){
    this.numberOfKilometers=this.numberOfKilometers+km
    }
    };
    console.log(car.printCarinfo());
    car.drive(20);
    console.log(car.printCarinfo());
    
    //zad 1
    var car={
        brand:"audi",
        color:"black",
        numberOfKilometers:0,
        tablica,
        printCarinfo(){
            console.log(this.brand);
            console.log(this.color);
            console.log(this.numberOfKilometers);
        },
        drive(km){
        this.numberOfKilometers=this.numberOfKilometers+km
        },
        
    wypiszPrzeglady(){
        for(i=0;i<tablica.length;i++){
            console.log(tablica[i]);
        }
    }
        };
    var tablica=[];
    function dodajWpis(data){
        tablica.push(data);
    }
    dodajWpis(1999);
    dodajWpis(1998);
    dodajWpis(1997);
    car.wypiszPrzeglady();
    
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
