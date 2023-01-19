Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.
Examples

evenLast([2, 3, 4, 5]) ➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([]) ➞ 0


my solution not completed:


function evenLast(arr) {
	if(arr.length<1){
		return 0;
	}else{
			var sum=0;
			for(let i=0;i<=arr.length-1;i++){
			
				if(arr[i]%2==0){
					
				const lastIndex=arr[arr.length-1];
					let two=arr[i]*lastIndex;
					sum+=two;
				}
			}
		}
	return sum;
}
arr=[2,4,6,8,10];
console.log(evenLast(arr));


output:

300
Test Passed: Value == 30
Test Passed: Value == 0
FAILED: Expected: 8, instead got: 16
FAILED: Expected: 140, instead got: 100
FAILED: Expected: 20, instead got: 100


