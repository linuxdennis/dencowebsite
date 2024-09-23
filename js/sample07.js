//EXTERNAL JAVASCRIPT
//data types ARRAYS
console.log("Display information in browser console")
var ref=document.getElementById('demo1')
var ref2=document.getElementById('demo2')

//new object()
let services=["painting","flooring","roofing"]
	


ref.innerHTML=services
console.log("number of items : ",services.length)
console.log(services[0])
var ages = [32, 33, 16, 40];

function checkAdult(age) {
	
	return age >= 18;
}

console.log(ages.every(checkAdult));