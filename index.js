
var a = 2500000003;
var otvet=''

do{
	var x=Math.floor(a/2);
	var i=a%2;
	var y=i.toString()
	otvet=otvet+y;
	a=x;
}while ((a/2)>=1)

otvet=otvet+'1';
var b=otvet.split("").reverse().join("")

console.log(b)

