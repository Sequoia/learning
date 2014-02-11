var sum = null;
var numbers = process.argv.slice(2);
numbers.forEach(function(number){
	sum += Number(number);
});
console.log(sum);
