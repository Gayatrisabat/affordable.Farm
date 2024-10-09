var password = "2706";
function passcheck()
{
if (document.getElementById('pass1').value != password){
alert('wrong Password, Try Again');
}
If(document.getElementById('pass1').value == password){
alert('Correct Password. Click OK to enter Webpage');
}
}

