// zad3
function createArray(number) {
    var newArray = [10];

    for (var counter = 0;counter < number ; counter++) {
        newArray.push(counter);
    }

    return newArray[2];
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// zad4

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
    result=null;
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
var secondArray=[];
newArray.sort((a,b)=>a-b);


return(newArray);
}
console.log(sortArray([145,11,3,64,4,6,10]));

//zad 7

function addArrays(array1,array2){
    var firstArray=array1;
    var secondArray=array2;
    var resultArray=[];
console.log();
    if(firstArray.length>secondArray.length){
        
for(i=0;i<secondArray.length;i++){
resultArray.push(firstArray[i]+secondArray[i])
}
for(i=0;i<firstArray.length-secondArray.length;i++){
    
    resultArray.push(firstArray[secondArray+1+i])
    console.log(secondArray+1+i);
}

    }
    else{

        for(i=0;i<firstArray.length;i++){
            resultArray.push(firstArray[i]+secondArray[i])
            }
            for(i=0;i<secondArray.length-firstArray.length;i++){
                resultArray.push(secondArray[firstArray+1+i])
            }


    }


return(resultArray);
}


console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]) );
console.log(addArrays([8,3,22], [1,3,2]) );
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));