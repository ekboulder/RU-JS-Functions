//verify that n is a number
var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

<!-- 1- tripleFive() -->

// var tripleFive = function () {
// 	for (var i=0; i<3; i++) console.log('Five!')
// }

// tripleFive()

<!-- 2- lastLetter -->

// var lastLetter = function (string) {
// 	var length = string.length
// 	return string[length-1]
// }

// alert(	'the last letter of your string is: ' + lastLetter(prompt('Please enter a string to find out what the last letter is:')))

<!-- 3- square -->

// var square = function (number) {
// 	if (isNumber(number)){
// 		return (number*number)
// 	} else
// 		return 'please enter a number and try again'	
// }

// alert(square(prompt('Please enter a number')))

<!-- 4- negate -->

// var negate = function (number){
// 	if (isNumber(number)){
// 		return (number*(-1))
// 	} else
// 		return 'please enter a number and try again'	
// }

// alert(negate(prompt('Please enter a number')))

<!-- 5- toArray -->

// var toArray = function (arg1, arg2, arg3) {
// 	var myArray = []
// 	myArray[0] = arg1
// 	myArray[1] = arg2
// 	myArray[2] = arg3
// 	return myArray
// }

// console.log( toArray(8, 9, 10) )

<!-- 6- startsWithA -->

// var startsWithA = function (string) {
// 	return 	(string.charAt(0).toLowerCase() === 'a') ? true : false
// }

// console.log( startsWithA(prompt('Please enter a string starting with the letter a or A')))

<!-- 7- excite -->

// var excite = function (string) {
// 	return (string + '!!!')
// }

// console.log (excite(prompt('please enter a string to excite')))

<!-- 8- sun -->

// var sun = function (string) {
// 	string = string || ''
// 	return (string.toLowerCase().indexOf('sun') >= 0) ? true : false
// }

// console.log (sun ( prompt ('Please enter a string with the word string in it' )))

<!-- 9- tiny -->

// var tiny = function (number) {
// 	return (!isNumber(number)) ? false :
// 			(number >=0 && number <=1) ? true : false
// }

// console.log (tiny ( prompt( ' please enter a number between 0 and 1')))

<!-- 10- getSeconds -->

var getSeconds = function (string) {
	console.log(string.slice(0,2) )
	console.log(string.slice(3,5) )
	return ( Number(string.slice(0,2) * 60 ) + Number(string.slice(3,5)) )
}

console.log(getSeconds('01:30'))

