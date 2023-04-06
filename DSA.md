## Two Pointers
- Brute force -> O(n2)
```

// Naive solution to find if there is a
// pair in A[0..N-1] with given sum.

function isPairSum(A, N, X)
{
		for (var i = 0; i < N-1; i++)
		{
			for (var j = i+1; j < N; j++)
			{
				// as equal i and j means same element
				if (i == j)
					continue;

				// pair exists
				if (A[i] + A[j] == X)
					return 1;

				// as the array is sorted
				if (A[i] + A[j] > X)
					break;
			}
		}

		// No pair found with given sum.
		return 0;
}
	
		var arr=[ 3, 5, 9, 2, 8, 10, 11 ];
		
		// value to search
		var val = 17;
	
		// size of the array
		var arrSize = 7;
	
		// Function call
		document.write(isPairSum(arr, arrSize, val));
```
- Actual 2 pointers
```
// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.
function isPairSum(A, N, X)
{

	// represents first pointer
	var i = 0;

	// represents second pointer
	var j = N - 1;

	while (i < j) {

		// If we find a pair
		if (A[i] + A[j] == X)
			return true;

		// If sum of elements at current
		// pointers is less, we move towards
		// higher values by doing i++
		else if (A[i] + A[j] < X)
			i++;

		// If sum of elements at current
		// pointers is more, we move towards
		// lower values by doing j--
		else
			j--;
	}
	return false;
}

// Driver code

	// array declaration
	var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
	
	// value to search
	var val = 17;
	
	// size of the array
	var arrSize =7;
	
	// Function call
	document.write(isPairSum(arr, arrSize, val));
	
	// This Code is Contributed by Harshit Srivastava
```
## Quick Sort
https://www.geeksforgeeks.org/quick-sort/
https://www.doabledanny.com/quick-sort-in-javascript
```function QuicklySort(N, arr){
    let bag = ""
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                // var temp = arr[j];
                // arr[j] = arr[i];
                // arr[i] = temp;
                swap(arr,i, j)
            }
        }
        bag += arr[i] + " "
    }
    console.log(bag)    
}

function swap(arr,i, j){
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    // console.log(arr)
}
```
## Bubble Sort
https://www.geeksforgeeks.org/bubble-sort/
```
function solve(N,arr){
    
    var done = false;
    
    while (!done) {
        done = true;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }

    console.log(arr.join(" "))
}
```
## Selection Sort
https://www.geeksforgeeks.org/selection-sort/
```
// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

function printArray( arr, size)
{
	var i;
	for (i = 0; i < size; i++)
		document.write(arr[i] + " ");
	document.write(" <br>");
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
	selectionSort(arr, n);
	document.write("Sorted array: <br>");
	printArray(arr, n);

```
## Merge Sort
https://www.geeksforgeeks.org/merge-sort/
```
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


function result(arr) {
    var res = mergeSort(arr);
    console.log(res.join(" "));
}
```
## Recursion
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
https://developer.mozilla.org/en-US/docs/Glossary/Recursion
```
Input - 5
Outout - 120
```
```
function numFactorial(num){
   
  if(num == 0 || num == 1){
      
      return 1
  }
  else{
      
      return num * numFactorial(num - 1)
  }

}
```
## Detect Palindrome
```
input - 1221
output - Yes
```
```
function Palindrome(num){
    let bag = num
    let z = 0;
    while(num != 0){
        var rem = num % 10;
        z = z * 10 + rem;
        num = Math.floor(num / 10)
    }
    // console.log(z)
    if(z == bag){
        console.log("Yes");
    }
    else{
        console.log("No")
    }
}
```
## Sliding Window
```
function maxSum(arr, n, k) {
        let max = 0;
        let sum = 0;
        // find initial sum of first k elements
        for (let i = 0; i < k; i++) {
            sum += arr[i];
            max = sum;
        }
        // iterate the array once
        // and increment the right edge
        for (let i = k; i < n; i++) {
            sum += arr[i] - arr[i - k];
             
            // compare if sum is more than max,
            // if yes then replace
            // max with new sum value
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }
```
## Find the 2nd largest number in the array.
```
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  
  return secondLargest;
}

const arr = [5, 2, 8, 10, 1];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 8

```
## Rotate the Matrix in a clockwise direction
```
function rotateMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const rotatedMatrix = [];

  for (let i = 0; i < numCols; i++) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < numRows; j++) {
      rotatedMatrix[i][j] = matrix[numRows - j - 1][i];
    }
  }

  return rotatedMatrix;
}
```
## Balanced parentheses Problem.
```
function balancedParentheses(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if ((char === ')' && top !== '(') ||
          (char === ']' && top !== '[') ||
          (char === '}' && top !== '{')) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const str1 = '()[]{}';
console.log(balancedParentheses(str1)); // Output: true

const str2 = '([)]';
console.log(balancedParentheses(str2)); // Output: false
```
## Count the frequency of a given character in the given String.
```
function countChar(str, char) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  
  return count;
}

const str = 'hello world';
const char = 'l';
const count = countChar(str, char);
console.log(count); // Output: 3

```
## Insert the new element to the array at the specified index
```
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, "new element");
console.log(arr); // Output: [1, 2, "new element", 3, 4, 5]
```
## - Write a program for the below format. (Input array:
    
['abc@gmail.com', 'def@yahoo.com', '[hello@gmail.com](mailto:hello@gmail.com)'])
    
Format: (Array of objects)

```
const emails = ['abc@gmail.com', 'def@yahoo.com', 'hello@gmail.com'];

const emailObjects = emails.map(email => {
  const [username, domain] = email.split('@');
  return { username, domain };
});

console.log(emailObjects);
```
## Check Palindrome
```
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```
## Remove duplicates from the array
```
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
```
## Swap two numbers without using a third variable or any inbuilt function
```
let a = 5;
let b = 8;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // Output: a = 8
console.log("b =", b); // Output: b = 5
```
## Replace the even position character of a string with *
```
const str = "Hello World";
const newStr = str.split("").map((char, index) => {
  return index % 2 === 0 ? char : "*";
}).join("");

console.log(newStr); // Output: "H*l o*o*d"
```
## Check if string A is a subsequence of string B or not and then the minimum no of operations needed to convert into a subsequence
```
function isSubsequence(a, b) {
  let i = 0;
  for (let j = 0; j < b.length && i < a.length; j++) {
    if (a[i] === b[j]) {
      i++;
    }
  }
  return i === a.length;
}
```
Alternate dp solution
```
function minOperationsToSubsequence(a, b) {
  const dp = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
  for (let j = 1; j <= b.length; j++) {
    dp[0][j] = 0;
  }
  for (let i = 1; i <= a.length; i++) {
    dp[i][0] = Infinity;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i-1] === b[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1);
      }
    }
  }
  return dp[a.length][b.length];
}
```
