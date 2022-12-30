// get all the user input values

function submitform(){
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var email=document.getElementById('email');
var reason=document.getElementById('reason');

if(fname.value == "" && lname.value == "" && email.value == "" && reason == ""){
    alert('All fields are required')
}
else{
    alert('Sucessfully Submitted')
}
}