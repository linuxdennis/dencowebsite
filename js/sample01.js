//EXTERNAL JAVASCRIPT

//the innerHTML property
//document.getElementById('demo1').innerHTML="welcome to JS class"

//alternative method
var dtext=document.getElementById('demo1')
//dtext.innerHTML="welcome to JS class"

//naming identifiers
//using small letters

//dtext.innerHTML=120+130

var value1=120
var value2=345
var result =value1+value2
 
//dtext.innerHTML=result
var greeting= "welcome to HOT JS class"
//alerts and POP ups 
//created using the inbuild alert function
alert(greeting)

//comfirm pop up 
//confirm("Are you sure ?")

//capture result from confirm popup
var result = confirm("Are you sure ?")
dtext.innerHTML=result

//prompt dialogue pop up

var result= prompt("Enter phone number","phone number")
dtext.innerHTML=result
