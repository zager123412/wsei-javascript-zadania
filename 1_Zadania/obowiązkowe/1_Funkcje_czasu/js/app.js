function counterHello(number){
    var counter=0;

    var tak =setInterval(function(){
        counter++;
        console.log("Hello");
        if(counter===number)
        {
            clearInterval(tak);
        }
    },500);
}
counterHello(10);
