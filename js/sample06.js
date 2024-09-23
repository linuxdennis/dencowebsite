//EXTERNAL JAVASCRIPT
//data types OBJECTs
console.log("Display information in browser console")
var ref=document.getElementById('demo1')
var ref2=document.getElementById('demo2')

//new object()
let srv1 ={
	name:"painting",
	price:2000,
desc:"per 2m"}

let srv2 ={
	name:"flooring",
	price:5000,
desc:"per 5m"}

let srv3 ={
	name:"roofing",
	price:7000,
desc:"per 5m"}

let services={
	"painting":srv1,
	"flooring":srv2,
	"roofing":srv3,
}

console.log(srv1.name)
console.log(srv1['price'])
console.log(services['painting'])
console.log(services['painting']['name'])
data=(services['painting']['name']+"<p>"+services['flooring']['name'])
ref.innerHTML=data

for(let prop in services){
	
console.log(prop)
	
}
