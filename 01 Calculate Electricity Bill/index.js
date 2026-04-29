let amount=0;
let unit=Number( prompt("Enter Electricity Unit"));

if(unit>400){
	amount+=13*(unit-400);
	unit=400;

}

if(unit>=201 && unit<=400){
	amount+=8*(unit-200);
	unit=200;
}

if(unit>=101 && unit<=200){
	amount+=6*(unit-100);
	unit=100;
}

amount+=4.2*unit;
document.getElementById("result").innerText=`Total Bill : ${amount}`;
console.log(amount)