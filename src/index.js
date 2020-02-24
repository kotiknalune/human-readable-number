module.exports = function toReadable (number) {

let smallNumbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let tensNumbers = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
let numberText = "";

if(number == 0) return smallNumbers[0];  

let hundreds = Math.floor(number / 100), // how many whole hundreds in number
	 tensUnits = number % 100; // remainder

if(hundreds >= 1) {
	 		numberText += smallNumbers[hundreds] + " hundred ";
	 }

let tens = Math.floor(tensUnits / 10), //how many whole tens in number
	 units = tensUnits % 10; // how many units in number

if(tens >= 2) {
	 	numberText += tensNumbers[tens];
	 	if(units != 0){
	 		numberText += " " + smallNumbers[units];
	 	}
	 }
else if (tensUnits != 0) {
		numberText += smallNumbers[tensUnits];
    }	
return numberText.trim();
}
