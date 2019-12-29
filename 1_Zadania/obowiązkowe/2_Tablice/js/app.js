//zad 0
function distFromAvarage(foo){
var tab=foo;
console.log(tab.length);
var sum=0;

for(i=0;i<tab.length;i++)
{
    
sum=sum+tab[i];
}

sum=sum/tab.length;


for(i=0;i<tab.length;i++)
{
    tab[i]=Math.abs(tab[i]-sum);
}
return tab;

}

            
   distFromAvarage([1,2,3,4,5,6,7]);
   distFromAvarage([1,1,1,1]);
   distFromAvarage([2,8,3,7]);




//zad 1
var fruits =["banan","jabłko","brzoskwinia","gruszka",];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    
    
//zad 2
    function createArray(number) {
    var newArray = [];
    if (number<0||number==0)
    {
    return newArray;
    }

    for (var counter = 1;counter <= number ;counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
    
    //zad 3
