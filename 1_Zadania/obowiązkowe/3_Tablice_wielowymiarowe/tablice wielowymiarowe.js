<script>
//zad 0

function checkArray(nie){
	var tak=nie;
	var czyJest;
	var licznik=0;
	for(i=0;i<tak.length;i++){
		for(j=0;j<2;j++){
			if(tak[i][j]%2==0)
			{
				licznik++;
			}
			else{
				continue;
			}
		}
		if(licznik==2)
		{
			console.log(true+",");
			licznik=0;
		}
		else{
			console.log(false+",");
			licznik=0;
		}
		
	}
	
}

console.log(checkArray([
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
] 
));

//zad 1

var array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
//1
console.log(array[3][2]);
//2
console.log(array[2].length);
//3
console.log(array[4][2]);

//zad 2

//1
var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
for(i=0;i<array[1].length;i++){
	console.log(array[1][i]);
}
//2
var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
for(i=0;i<array.length;i++){
	console.log(array[i].length);
}
//3
var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
for(i=0;i<array.length;i++){
	for(j=0;j<array[i].length;j++){
		console.log(array[i][j]);
	}
}
//zad 3

function print2DArray(nie){
	var tak=nie;
	for(i=0;i<tak.length;i++){
		for(j=0;j<tak[i].length;j++){
			console.log(tak[i][j]);
			
		}
	}
}
console.log(print2DArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));
//zad 4

function print2DArray(nie){
	var tak=nie;
	for(i=0;i<tak.length;i++){
		for(j=0;j<tak[i].length;j++){
			console.log(tak[i][j]);
			
		}
	}
}
console.log(print2DArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));
//zad 5
function create2DArray(a,b){
	var tab=[];
	var licznik=1;
	for(i=0;i<=a;i++){
		tab[i]=[];
	}
	for(q=0;q<a;q++){
		for(w=0;w<b;w++){
			tab[q][w]=licznik;
			licznik++;
		}
	}
	
	
	for(k=0;k<a;k++){
    document.write("[");
		for(l=0;l<b;l++){
		document.write(tab[k][l]+",");
	}
     document.write("],");
	}
	
}

create2DArray(4,4);


</script>

