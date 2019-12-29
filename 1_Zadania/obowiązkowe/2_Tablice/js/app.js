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
    
function printTable(array){
    var tab=array;
    for(i=0;i<tab.length;i++)
    {
        console.log(tab[i]);
    }
}

//zad 4
function multiply(array){
    var newArray=array ;
    var lengt=newArray.length;
    var result=newArray[0];
    for(i=1;i<lengt;i++)
    {
        result=result*newArray[i];
    
    
    }
    
    return result;
    }
    console.log(multiply([1,2,3,4,5,6,7]));
    console.log(multiply([1,1,1,1]) );
    console.log(multiply([2,8,3,7]) );

    //zad 5
    function getEvenAvarage(array){
        var newArray=array;
        var secondArray=[];
        var length=newArray.length;
        for(i=0;i<length;i++){
        if(newArray[i]%2==0)
        {
            secondArray.push(newArray[i]);
        }
        }

        var result=0;
        if(secondArray==0){
            return null;
        }
        
        for(i=0;i<secondArray.length;i++){
        
        result=result+secondArray[i];
        
        }
        
        
        result=result/secondArray.length;
        
        return result;
        }
        
        console.log(getEvenAvarage([1,2,3,4,5,6,7]) );
        console.log(getEvenAvarage([1,1,1,1]) );
        console.log(getEvenAvarage([2,8,3,7,4]) );
        
        //zad 6
        function sortArray(array){
            var newArray=array;
            
            newArray.sort((a,b)=>a-b);
            
            
            return newArray;
            }
            console.log(sortArray([145,11,3,64,4,6,10]));


            //zad 7
            function addArrays(array1,array2){
                var tab1=array1;
                var tab2=array2;
                var tab3=[];
                var lengt;
                if(tab1.length!=tab2.length)
                {
                    lengt=Math.min(tab1.length,tab2.length)
                    for(i=0;i<lengt;i++)
                {
                 tab3.push(tab1[i]+tab2[i]);
                }
                if(tab1.length>tab2.length)
                {
                    for(i=lengt;i<tab1.length;i++)
                    tab3.push(tab1[i]);
                }
                if(tab1.length<tab2.length)
                {
                    for(i=lengt;i<tab2.length;i++)
                    tab3.push(tab2[i]);
                }
                }
                else
                {
                for(i=0;i<tab1.length;i++)
                {
                 tab3.push(tab1[i]+tab2[i]);
                }
                } 
              return tab3;
            }
            
            
            console.log(addArrays([4,0,1,3,4],[1,9,6,7,8,17]));
            console.log(addArrays([8,3,22], [1,3,2]));
            console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));
