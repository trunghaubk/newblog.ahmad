/*
function add(a, b){
		return parseFloat(a) + parseFloat(b);
}
function sub(a, b){
		return parseFloat(a) - parseFloat(b);
}
function mul(a, b){
		return parseFloat(a) * parseFloat(b);
}
function div(a, b){
		return parseFloat(a) / parseFloat(b);
}
*/


function number1() {
	document.getElementById('Result').value=document.getElementById('so1').value += "1";
}
function number2() {
	document.getElementById('Result').value=document.getElementById('so1').value += "2";
}
function number3() {
	document.getElementById('Result').value=document.getElementById('so1').value += "3";
}
function number4() {
	document.getElementById('Result').value=document.getElementById('so1').value += "4";
}
function number5() {
	document.getElementById('Result').value=document.getElementById('so1').value += "5";
}
function number6() {
	document.getElementById('Result').value=document.getElementById('so1').value += "6";
}
function number7() {
	document.getElementById('Result').value=document.getElementById('so1').value += "7";
}
function number8() {
	document.getElementById('Result').value=document.getElementById('so1').value += "8";
}
function number9() {
	document.getElementById('Result').value=document.getElementById('so1').value += "9";
}
function number0() {
	document.getElementById('Result').value=document.getElementById('so1').value += "0";
}
function add() {
	document.getElementById('Result').value=document.getElementById('so1').value += "+";
}
function sub() {
	document.getElementById('Result').value=document.getElementById('so1').value += "-";
}
function mul() {
	document.getElementById('Result').value=document.getElementById('so1').value += "*";
}
function div() {
	document.getElementById('Result').value=document.getElementById('so1').value += "/";
}
function equa() {
	var ketqua = eval(document.getElementById('Result').value);
	document.getElementById('Result').value = ketqua;
}
funfunction refreshPage() {
    location.reload(true);
}
