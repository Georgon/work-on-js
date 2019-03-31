// 5! = 5*4*3*2*1

var a = 7
var k = a
var i = a
var otvet = 1
do{
	var y=a-1
	if (y!=0) {
		otvet=otvet*y
	}
	a=y
	i=i-1
}while (i>0)
otvet=otvet*k
console.log(otvet)