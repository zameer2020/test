swap two given numbers!

swap(100, 200) ➞ [200, 100]

swap(44, 33) ➞ [33, 44]

swap(21, 12) ➞ [12, 21]



function swap(a, b) {
	a,b=b,a
	return [b, a]
}
let a=100;
let b=200;
console.log(swap(a,b));

[ 200, 100 ]
Test Passed: Value == '[200, 100]'
Test Passed: Value == '[33, 44]'
Test Passed: Value == '[12, 21]'
Test Passed: Value == '[20, 10]'
